
import ClientRecentPostsItems from "./ClientRecentPostsItems";

// import pic from "../../../assets/images/img/image-2.jpg";
function ClientRecentPosts() {
  return (
    <div className="px-2 py-1 rounded shadow bg-surface">
      <h1 className="text-xl md:text-2xl font-bold text-text/70 py-2 tracking-wide">
        Recent Posts
      </h1>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[0.2fr_2fr_0.8fr_1fr] gap-2 items-center ">
          <span className="font-bold text-sm text-text px-1">No.</span>
          <span className="font-bold text-sm text-text">Title</span>
          <span className="font-bold text-sm text-text">Date</span>
          <span className="font-bold text-sm text-text">Actions</span>
        </div>
        <div className="flex flex-col gap-3 py-2 ">
          <ClientRecentPostsItems/>
          <ClientRecentPostsItems/>
          <ClientRecentPostsItems/>
          <ClientRecentPostsItems/>
          <ClientRecentPostsItems/>
          <ClientRecentPostsItems/>
        </div>
      </div>
    </div>
  );
}

export default ClientRecentPosts;
