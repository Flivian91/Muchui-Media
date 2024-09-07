import { BsThreeDotsVertical } from "react-icons/bs";
import ClientRecentNotificationsItems from "./ClientRecentNotificationsItems";

function ClientRecentNotification() {
  return (
    <div className="shadow rounded px-2 bg-surface">
      <div className="flex items-center justify-between border-b">
        <h1 className="text-sm md:text-lg font-bold text-text/70 py-2 tracking-wide">
          Recent Notifications
        </h1>
        <button className="p-1 hover:bg-background text-text-secondary hover:text-text transition-all duration-200 rounded">
          <BsThreeDotsVertical />
        </button>
      </div>
      <div className="flex flex-col gap-2 pb-2">
        <ClientRecentNotificationsItems />
        <ClientRecentNotificationsItems />
        <ClientRecentNotificationsItems />
        <ClientRecentNotificationsItems />
      </div>
    </div>
  );
}

export default ClientRecentNotification;
