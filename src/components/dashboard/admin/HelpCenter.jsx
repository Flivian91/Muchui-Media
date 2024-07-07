// src/components/HelpCenter.js
import React from 'react';

const HelpCenter = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Help Center</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">FAQs</h2>
        <ul>
          <li className="mb-2">
            <strong>How do I reset my password?</strong>
            <p>Go to the settings page and click "Reset Password".</p>
          </li>
          <li className="mb-2">
            <strong>How do I contact support?</strong>
            <p>Use the contact form on the support page.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpCenter;
