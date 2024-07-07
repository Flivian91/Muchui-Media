// src/components/Reports.js
import React from "react";

const Reports = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <div className="mb-4">
        <button className="bg-accent text-white p-2 px-4 font-bold rounded">
          Generate New Report
        </button>
      </div>
      <ul className="bg-white md:p-4 px-2 rounded shadow text-text font-semibold divide-y">
        <li className="flex justify-between items-center  py-2">
          <span className="text-sm md:text-base">Monthly Report - May</span>
          <button className="bg-green-500 text-white sm:p-2 px-2 py-1 md:px-4 text-sm md:text-base hover:bg-green-600 transition-colors duration-200 rounded">
            Download
          </button>
        </li>
        <li className="flex justify-between items-center  py-2">
          <span className="text-sm md:text-base">Monthly Report - May</span>
          <button className="bg-green-500 text-white sm:p-2 px-2 py-1 md:px-4 text-sm md:text-base hover:bg-green-600 transition-colors duration-200 rounded">
            Download
          </button>
        </li>
       
      </ul>
    </div>
  );
};

export default Reports;
