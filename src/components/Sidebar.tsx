import React from 'react';

export const Sidebar = () => {
  return (
    <aside className="w-64 h-screen p-4 bg-gray-100">
      <h2 className="text-lg font-semibold mb-6">Account</h2>
      <ul className="space-y-4">
        <li>
          <a href="#" className="block py-2 px-4 text-gray-700 bg-gray-200 rounded-lg">
            Personal info
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">
            Preferences
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">
            Language & localization
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">
            Notifications
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">
            Messages
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">
            Privacy
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">
            Login & security
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">
            Payments
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">
            Taxes
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-lg">
            Hosting tools
          </a>
        </li>
      </ul>
    </aside>
  );
};
