// src/components/Posts.js
import { articles } from "../../../data/article";
import PostsItems from "../../common/PostsItems";
import CreatePost from "../../common/CreatePost";
import { supabase } from "../../../supabase/supabaseClient";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../common/LoadingSpinner";
import EditPostModel from "../../common/EditPostModel";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({});
  // Fetch all the posts
  async function fetchPosts() {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from("Posts").select("*");
      if (error) {
        console.log(error.message);
      }
      setPosts(data || []);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(function () {
    fetchPosts();
  }, []);
  // Function to update the exiting data
  function handleUpdate(id) {
    setIsEditing(true);
    const postToUpdate = posts.find((post) => post.id === id);
    setUpdatedData(postToUpdate);
    console.log(postToUpdate);
    
  }
  // Function handle delete
  async function deletePost(id) {
    const { error } = await supabase.from("Posts").delete().eq("id", id);
    if (error) {
      console.log(error.message);
    }
    fetchPosts()
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search post..."
          className="p-2 border border-secondary w-28 md:w-40 focus:w-44 transition-all duration-300 text-sm sm:text-base focus:border-secondary rounded outline-none focus:outline-none focus:ring-0"
        />
        <CreatePost fetchLoad={fetchPosts} role={"add"}>
          Add Post
        </CreatePost>
        {isEditing && (
          <EditPostModel
            isOpen={isEditing}
            onRequestClose={() => setIsEditing(false)}
            post={updatedData}
            fetchLoad={fetchPosts}
          />
        )}
      </div>
      <div className="min-w-full bg-inherit flex-grow">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
            {posts.map((post) => (
              <PostsItems onDelete={deletePost} onUpdate={handleUpdate} post={post} key={post.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
