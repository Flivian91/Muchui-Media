/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Modal from "react-modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { GiCancel } from "react-icons/gi";
import { useCloseModel } from "../../hooks/useCloseModel";
import { supabase } from "../../supabase/supabaseClient";

// Ensure the modal root element is set for accessibility
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

const CreatePostModal = ({ isOpen, onRequestClose, fetchLoad }) => {
  const [categories, setCategories] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [userId, setUserId] = useState(null);
  const ref = useCloseModel(onRequestClose);

  // Create New Posts
  async function createNewPost(data) {
    const { error } = await supabase.from("Posts").insert(data);
    fetchLoad();
    if (error) {
      console.log(error.message);
    }
  }

  // Handle Image Upload
  async function uploadImage(file) {
    try {
      // Upload image
      const { data, error } = await supabase.storage
        .from("image_url")
        .upload(`public/${Date.now()}`, file);

      if (error) {
        console.log(error.message);
      }
      getPublicImage(data.fullPath);
    } catch (err) {
      console.log(err);
    }
  }
  // Get the public image
  // https://dvvcmzddgqymakkbwekd.supabase.co/storage/v1/object/public/image_url/public/1726078125793
  async function getPublicImage(file) {
    const image = `https://dvvcmzddgqymakkbwekd.supabase.co/storage/v1/object/public/${file}`;
    setImageUrl(image);
  }

  const handleContentChange = (value) => {
    setContent(value);
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };
  async function loadUserInfo() {
    const { data } = await supabase.auth.getUser();
    setUserId(data.user.id);
  }
  useEffect(function () {
    loadUserInfo();
  }, []);

  const handleSubmit = () => {
    const newPost = {
      user_id: userId,
      title,
      image_url: imageUrl,
      content,
      category_id: "277e17fd-8101-42ec-84d6-bf14122cc343",
    };
    createNewPost(newPost);
    setContent("");
    setTitle("");
    setCategory("");
    onRequestClose();
  };

  // Ensure proper cleanup of Quill
  useEffect(() => {
    return () => {
      setContent("");
    };
  }, []);

  // Load Roles
  async function loadCategories() {
    const { data, error } = await supabase
      .from("Categories")
      .select("id, name");
    if (error) {
      console.log(error.message);
    }
    setCategories(data || []);
  }
  useEffect(function () {
    loadCategories();
  }, []);
  useEffect(
    function () {
      if (categories.length > 0) {
        setCategory(categories[0].id);
      }
    },
    [categories]
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      contentLabel="Create Post Modal"
    >
      <div
        ref={ref}
        className="bg-white p-6 rounded-lg w-full max-w-2xl h-screen overflow-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Create Post</h2>
          <button
            onClick={onRequestClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <GiCancel className="h-5 w-5" />
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-base font-semibold">
              Title
            </label>
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
            <label htmlFor="category" className="text-base font-semibold">
              Category
            </label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              className="border-gray-400/50 rounded-sm focus:ring-0 focus:outline-none focus:border-gray-400/50"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="text-base font-semibold">
              Upload cover image
            </label>
            <input
              type="file"
              accept="image/*"
              name="image"
              onChange={handleFileUpload}
              id="image"
              className="file:bg-pink-500 file:border-none file:py-1 file:rounded-sm file:text-text file:focus:outline-none file:focus:border-none file:ring-0 file:outline-none "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="content" className="text-base font-semibold">
              Content
            </label>
            <ReactQuill
              value={content}
              onChange={handleContentChange}
              theme="snow"
              modules={modules}
              formats={formats}
              id="content"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePostModal;
