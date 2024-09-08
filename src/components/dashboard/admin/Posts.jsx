// src/components/Posts.js
import { articles } from "../../../data/article";
import PostsItems from "../../common/PostsItems";
import CreatePost from "../../common/CreatePost";

const Posts = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="flex justify-between items-center mb-4">
      <input
          type="text"
          placeholder="Search post..."
          className="p-2 border border-secondary w-28 md:w-40 focus:w-44 transition-all duration-300 text-sm sm:text-base focus:border-secondary rounded outline-none focus:outline-none focus:ring-0"
        />
        <CreatePost role={'add'}>Add Post</CreatePost>
      </div>
      <div className="min-w-full bg-inherit flex-grow">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
          {articles.map((post) => (
            <PostsItems post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;

