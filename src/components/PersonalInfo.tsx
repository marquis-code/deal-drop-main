import React from 'react';

export const PersonalInfo = () => {
  return (
    <main className="flex-grow p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Personal info</h2>
      <p className="mb-6">Update your profile, contact details, and preferences to personalize your experience.</p>

      {/* Profile picture */}
      <div className="mb-6 flex items-center space-x-4">
        <div className="w-24 h-24 bg-gray-300 rounded-full"></div> {/* Placeholder for profile picture */}
        <div>
          <p>Profile picture</p>
          <small>PNG, JPEG under 15MB</small>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded-lg">Upload image</button>
        <button className="px-4 py-2 text-black border rounded-lg">Remove</button>
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">First name</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="First name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last name</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Last name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Email"
          />
          <button className="mt-2 text-sm text-indigo-600">Change email</button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone number</label>
          <input
            type="tel"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Phone number"
          />
          <button className="mt-2 text-sm text-indigo-600">Change phone number</button>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Address"
          />
          <button className="mt-2 text-sm text-indigo-600">Change address</button>
        </div>
      </form>
    </main>
  );
};
