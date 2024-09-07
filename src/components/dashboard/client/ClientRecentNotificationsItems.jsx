import { BiCheckCircle } from "react-icons/bi";

function ClientRecentNotificationsItems() {
  return (
    <div className="flex border-b">
      <div className="flex-grow">
        <h1 className="text-text font-bold text-lg tracking-wide truncate">
          This is the first notification
        </h1>
        <span className="text-sm font-mono font-semibold text-text-secondary">
          12 hours ago
        </span>
      </div>
      <button className="p-1 hover:text-secondary transition-all duration-200">
        <BiCheckCircle fontSize={19} />
      </button>
    </div>
  );
}

export default ClientRecentNotificationsItems;
