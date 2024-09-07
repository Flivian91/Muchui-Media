import ClientPostsItems from "./ClientPostsItems";

function ClientPostsDisplay() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
      <ClientPostsItems />
      <ClientPostsItems />
      <ClientPostsItems />
      <ClientPostsItems />
      <ClientPostsItems />
      <ClientPostsItems />
      <ClientPostsItems />
      <ClientPostsItems />
    </div>
  );
}

export default ClientPostsDisplay;
