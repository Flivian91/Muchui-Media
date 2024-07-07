// src/components/Settings.js
import React from 'react';

const Settings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <form className="bg-white p-4 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700">Theme</label>
          <select className="p-2 border rounded w-full">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Notifications</label>
          <input type="checkbox" className="mr-2" /> Enable Notifications
        </div>
        <button className="bg-blue-500 text-white p-2 rounded">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
