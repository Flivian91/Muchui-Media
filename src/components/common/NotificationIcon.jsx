import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";


function NotificationIcon({ setIsOpen }) {

  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className="p-2 rounded bg-surface text-secondary relative"
    >
      <IoMdNotificationsOutline fontSize={23} />
      <span className="block w-2.5 h-2.5 bg-secondary rounded-full absolute top-1.5  right-1.5"></span>
    </button>
  );
}

export default NotificationIcon;
