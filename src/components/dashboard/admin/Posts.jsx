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
        <CreatePost>Add Post</CreatePost>
      </div>
      <div className="min-w-full bg-inherit flex-grow">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
          {articles.map((post) => (
            <PostsItems post={post} key={post.id} />
          ))}
        </div>
      </div>
      {/* <div className="py-5"></div> */}
    </div>
  );
};

export default Posts;
{
  /* <div className=" grid grid-cols-[0.2fr_1.8fr_1.2fr_0.2fr] gap-2 items-center justify-center border-b px-4 py-3 font-bold text-base text-text">
          <span>ID</span>
          <span>Title</span>
          <span>Author</span>
          <span>Actions</span>
        </div>
        <div className="flex flex-col gap-2 divide-y ">
          {articles.map((post) => (
            <PostsItems key={post.id} post={post} />
          ))}
        </div> */
}
