import ClientPostsDisplay from "./ClientPostsDisplay";
import ClientPostsPagination from "./ClientPostsPagination";
import ClientPostsSearchBar from "./ClientPostsSearchBar";
import ClientSortPosts from "./ClientSortPosts";

function ClientPosts() {
  return (
    <div className="p-2 flex flex-col gap-5">
      <h1 className="md:text-2xl text-xl font-bold text-text tracking-wider mt-3">All Posts</h1>
      <div className="flex items-center justify-between">
        <ClientPostsSearchBar />
        <ClientSortPosts />
      </div>
      <div className="flex flex-col gap-4">
        <ClientPostsDisplay />
        <ClientPostsPagination />
      </div>
    </div>
  );
}

export default ClientPosts;
