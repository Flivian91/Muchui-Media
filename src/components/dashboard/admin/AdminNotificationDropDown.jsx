import React from "react";

import NotificationDropDownItems from "../../common/NotificationDropDownItems";
import { useCloseModel } from "../../../hooks/useCloseModel";
function AdminNotificationDropDown({ setOpen }) {
  const ref = useCloseModel(setOpen);
  return (
    <div
      ref={ref}
      className="absolute top-full -left-44 md:left-0 md:right-0 mx-auto mt-1 shadow rounded w-72 py-2 bg-white z-30 text-text"
    >
      <h1 className="px-2 border-b text-xl select-none font-bold py-1">
        Notifications
      </h1>
      <div className="px-2 py-2 flex flex-col gap-2">
        <NotificationDropDownItems />
        <NotificationDropDownItems />
        <NotificationDropDownItems />
        <NotificationDropDownItems />
      </div>
    </div>
  );
}

export default AdminNotificationDropDown;
