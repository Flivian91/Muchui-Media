/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Modal from "react-modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { GiCancel } from "react-icons/gi";
import { useCloseModel } from "../../hooks/useCloseModel";
import { supabase } from "../../supabase/supabaseClient";

Modal.setAppElement("#root");

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const EditPostModel = ({ isOpen, onRequestClose, fetchLoad, post }) => {
  const [categories, setCategories] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [userId, setUserId] = useState(null);
  const ref = useCloseModel(onRequestClose);

  useEffect(() => {
    setContent(post.content);
    setTitle(post.title);
    setImageUrl(post.image_url); // Load the current image URL
    setCategory(post.category_id);
  }, [post]);

  // Load categories
  async function loadCategories() {
    const { data, error } = await supabase.from("Categories").select("id, name");
    if (error) {
      console.error(error.message);
    }
    setCategories(data || []);
  }

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setCategory(categories[0].id);
    }
  }, [categories]);

  // Load user info
  async function loadUserInfo() {
    const { data } = await supabase.auth.getUser();
    setUserId(data.user.id);
  }

  useEffect(() => {
    loadUserInfo();
  }, []);

  // Handle image upload
  async function uploadImage(file) {
    try {
      // Create a unique file name and upload to Supabase Storage
      const fileName = `public/${Date.now()}_${file.name}`;
      const { data, error } = await supabase.storage
        .from("image_url") // Replace with your actual storage bucket name
        .upload(fileName, file);

      if (error) {
        console.error("Error uploading image:", error.message);
        return;
      }

      // Get the public URL of the uploaded image
      const newImageUrl = `https://your-supabase-project-url.storage.supabase.co/storage/v1/object/public/image_url/${fileName}`;
      setImageUrl(newImageUrl); // Update image URL state
      return newImageUrl;
    } catch (err) {
      console.error("Upload image error:", err);
    }
  }

  // Delete old image from Supabase storage
  async function deleteOldImage(imageUrl) {
    const fileName = imageUrl.split("/").pop();
    const { error } = await supabase.storage.from("image_url").remove([fileName]);

    if (error) {
      console.error("Error deleting old image:", error.message);
    }
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setNewImage(file); // Store new image for later upload
    }
  };

  const handleSubmit = async () => {
    let updatedImageUrl = imageUrl;

    // If a new image is uploaded, delete the old one and upload the new one
    if (newImage) {
      if (imageUrl) {
        await deleteOldImage(imageUrl); // Delete old image if exists
      }
      updatedImageUrl = await uploadImage(newImage); // Upload new image and get its URL
    }

    const updatedPost = {
      id: post.id,
      user_id: userId,
      title,
      image_url: updatedImageUrl, // Use the new image URL if updated
      content,
      category_id: category,
    };

    // Update the post with new data
    await supabase.from("Posts").upsert(updatedPost);
    fetchLoad();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      contentLabel="Edit Post Modal"
    >
      <div
        ref={ref}
        className="bg-white p-6 rounded-lg w-full max-w-2xl h-screen overflow-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Edit Post</h2>
          <button onClick={onRequestClose} className="text-gray-500 hover:text-gray-700">
            <GiCancel className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-base font-semibold">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              className="border-gray-400/50 rounded-sm focus:ring-0 focus:outline-none focus:border-gray-400/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="text-base font-semibold">Category</label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              className="border-gray-400/50 rounded-sm focus:ring-0 focus:outline-none focus:border-gray-400/50"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="text-base font-semibold">Upload cover image</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleFileUpload}
              id="image"
              className="file:bg-pink-500 file:border-none file:py-1 file:rounded-sm file:text-text file:focus:outline-none file:focus:border-none file:ring-0 file:outline-none"
            />
          </div>
          {imageUrl && (
            <div className="relative">
              <img src={imageUrl} alt="Post Cover" className="w-full h-auto mt-2" />
              <button
                onClick={() => deleteOldImage(imageUrl)}
                className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full"
              >
                Delete Image
              </button>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <label htmlFor="content" className="text-base font-semibold">Content</label>
            <ReactQuill
              value={content}
              onChange={(value) => setContent(value)}
              theme="snow"
              modules={modules}
              formats={formats}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 p-2 text-center text-base text-white font-semibold rounded-sm"
          >
            Update Post
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditPostModel;
