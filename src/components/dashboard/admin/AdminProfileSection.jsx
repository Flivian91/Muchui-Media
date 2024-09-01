import { useState } from "react";
import CreatePost from "../../common/CreatePost";
import NotificationIcon from "../../common/NotificationIcon";
import AdminProfileNavbar from "./AdminProfileNavbar";
import AdminNotificationDropDown from "./AdminNotificationDropDown";

function AdminProfileSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <CreatePost>Create post</CreatePost>
        <NotificationIcon setIsOpen={setIsOpen} />
        <AdminProfileNavbar />
      </div>
      {isOpen && <AdminNotificationDropDown setOpen={setIsOpen} />}
    </div>
  );
}

export default AdminProfileSection;
