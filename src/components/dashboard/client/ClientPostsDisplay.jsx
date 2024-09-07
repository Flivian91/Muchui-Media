import ClientPostsItems from "./ClientPostsItems";

function ClientPostsDisplay() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
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
