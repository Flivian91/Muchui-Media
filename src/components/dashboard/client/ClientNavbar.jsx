import React from 'react';
import { Link } from 'react-router-dom';

const ClientNavbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto p-4 flex flex-col">
        <div className="text-xl font-bold">
          <Link to="/client">Client Dashboard</Link>
        </div>
        <div className="space-x-4 flex flex-col">
          <Link to="/client" className="hover:text-primary">Home</Link>
          <Link to="/client/profile" className="hover:text-primary">Profile</Link>
          <Link to="/client/posts" className="hover:text-primary">My Posts</Link>
          <Link to="/client/settings" className="hover:text-primary">Settings</Link>
        </div>
      </div>
    </nav>
  );
};

export default ClientNavbar;
