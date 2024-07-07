// src/components/RecentActivities.js
import React from 'react';
import { BsPencil } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa';
// import { ClockIcon, PencilIcon, UserIcon } from '@heroicons/react/outline';

const activities = [
  {
    user: 'User X',
    action: 'logged in',
    timestamp: '2 minutes ago',
    avatar: 'https://via.placeholder.com/40', // Placeholder avatar URL
  },
  {
    user: 'User Y',
    action: 'created a new post',
    timestamp: '15 minutes ago',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    user: 'Page Z',
    action: 'was updated',
    timestamp: '1 hour ago',
    avatar: 'https://via.placeholder.com/40',
  },
];

const RecentActivities = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      {/* <h2 className="text-xl font-bold mb-4">Recent Activities</h2> */}
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-center space-x-4">
            <img src={activity.avatar} alt="Avatar" className="h-10 w-10 rounded-full" />
            <div className="flex-1">
              <p className="text-gray-900">
                <span className="font-medium">{activity.user}</span> {activity.action}
              </p>
              <p className="text-sm text-gray-500">
                <FaClock className="h-4 w-4 inline-block mr-1" /> {activity.timestamp}
              </p>
            </div>
            <button className="text-blue-500 hover:text-blue-700">
              <BsPencil className="h-5 w-5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
