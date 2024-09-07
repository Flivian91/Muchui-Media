// src/components/Notifications.js
import { useState } from "react";
import { BiCheckCircle, BiTrash } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { useCloseModel } from "../../../hooks/useCloseModel";

const notifications = [
  {
    id: 1,
    message: "User X logged in",
    read: false,
    type: "login",
  },
  {
    id: 2,
    message: "New post created by User Y",
    read: false,
    type: "post",
  },
  {
    id: 3,
    message: "Page Z updated",
    read: true,
    type: "update",
  },
  {
    id: 4,
    message: "User A logged in",
    read: false,
    type: "login",
  },
  {
    id: 5,
    message: "User B updated profile",
    read: true,
    type: "update",
  },
  {
    id: 6,
    message: "New comment on post by User C",
    read: false,
    type: "comment",
  },
  {
    id: 7,
    message: "User D deleted a post",
    read: true,
    type: "delete",
  },
  {
    id: 8,
    message: "User E created a new post",
    read: false,
    type: "post",
  },
  {
    id: 9,
    message: "User F updated settings",
    read: true,
    type: "update",
  },
  {
    id: 10,
    message: "User G logged out",
    read: false,
    type: "logout",
  },
  {
    id: 11,
    message: "User H commented on a post",
    read: true,
    type: "comment",
  },
  {
    id: 12,
    message: "User I liked a post",
    read: false,
    type: "like",
  },
  {
    id: 13,
    message: "User J followed User K",
    read: true,
    type: "follow",
  },


];

const ClientNotifications = () => {
  const [filter, setFilter] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useCloseModel(setIsOpen);

  const handleMarkAsRead = (id) => {
    // Implement mark as read functionality
    console.log(`Mark as read: ${id}`);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log(`Delete: ${id}`);
  };

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "all") return true;
    if (filter === "read") return notification.read;
    if (filter === "unread") return !notification.read;
    return notification.type === filter;
  });

  return (
    <div className="p-6 px-2 space-y-6">
      <h1 className="text-3xl font-bold">All Nofitications</h1>

      <div className="flex justify-between">
        <div className="flex gap-1">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("read")}
            className={`px-4 py-2 rounded ${
              filter === "read" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Read
          </button>
          <button
            onClick={() => setFilter("unread")}
            className={`px-4 py-2 rounded ${
              filter === "unread" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Unread
          </button>
        </div>
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            type="button"
            className="inline-flex justify-center  md:w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Filter by Type
            <FiFilter className="h-5 w-5 ml-2" />
          </button>
          {isOpen && (
            <div
              ref={ref}
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <button
                  onClick={() => setFilter("post")}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  Post
                </button>
                <button
                  onClick={() => setFilter("update")}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  Update
                </button>
                <button
                  onClick={() => setFilter("comment")}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  Comment
                </button>
                <button
                  onClick={() => setFilter("delete")}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  Delete
                </button>
                <button
                  onClick={() => setFilter("like")}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  Like
                </button>
                <button
                  onClick={() => setFilter("follow")}
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  Follow
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        {filteredNotifications.map((notification) => (
          <li
            key={notification.id}
            className="flex justify-between items-center py-2 even:bg-surface px-2 rounded"
          >
            <div>
              <p
                className={`text-lg ${
                  notification.read ? "text-gray-500" : "text-black"
                }`}
              >
                {notification.message}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleMarkAsRead(notification.id)}
                className="text-green-500 hover:text-green-700"
              >
                <BiCheckCircle className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleDelete(notification.id)}
                className="text-red-500 hover:text-red-700"
              >
                <BiTrash className="h-5 w-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientNotifications;

