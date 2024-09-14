import ClientAdminDetails from "./ClientAdminDetails";
import ClientFollowUs from "./ClientFollowUs";
import ClientLikesGraph from "./ClientLikesGraph";
import ClientRecentNotification from "./ClientRecentNotification";
import ClientRecentPosts from "./ClientRecentPosts";
import ClientStats from "./ClientStats";
import ClientWelcomeMessage from "./ClientWelcomeMessage";

function ClientDashboard() {

  return (
    <section className="grid lg:grid-cols-[1fr_0.5fr] gap-3 px-2 py-2">
      <div className="flex flex-col gap-4">
        <ClientWelcomeMessage />
        <ClientStats />
        <ClientLikesGraph />
        <ClientRecentPosts />
      </div>
      <div className="flex flex-col gap-4">
        <ClientRecentNotification />
        <ClientAdminDetails />
        <ClientFollowUs />
      </div>
    </section>
  );
}

export default ClientDashboard;
