import React from 'react';

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="flex items-center space-x-4">
        <button className="text-sm text-gray-400">&larr; Back</button>
        <h1 className="text-lg font-bold">Account</h1>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 text-sm bg-gray-800 border border-gray-600 rounded-lg"
        />
        <div className="w-8 h-8 bg-gray-700 rounded-full"></div> {/* Profile Picture */}
      </div>
    </header>
  );
};
