// src/components/Posts.js
import { articles } from "../../../data/article";
import PostsItems from "../../common/PostsItems";
import CreatePost from "../../common/CreatePost";
import { supabase } from "../../../supabase/supabaseClient";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../common/LoadingSpinner";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // Fetch all the posts
  async function fetchPosts() {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from("Posts").select("*");
      if (error) {
        console.log(error.message);
      }
      setPosts(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(function () {
    fetchPosts();
  }, []);
  console.log(posts);

  // Create New Posts
  async function createNewPost(data) {
    const { error } = supabase.from("Posts").insert(data);
    if (error) {
      console.log(error.message);
    }
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
        <CreatePost onSubmit={createNewPost} role={"add"}>Add Post</CreatePost>
      </div>
      <div className="min-w-full bg-inherit flex-grow">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
            {articles.map((post) => (
              <PostsItems post={post} key={post.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
