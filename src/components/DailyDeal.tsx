import React from 'react';

export const DailyDeal = () => {
  const handleShowDeal = () => {
    // Handle showing the daily deal or navigate to the deal page
    console.log("Today's deal clicked!");
  };

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">SD DAILY DEAL</h1>
        <p className="mb-8">A hand-picked, limited-time deal launches every day at 8am ET.</p>
        <button
          onClick={handleShowDeal}
          className="bg-red-600 px-6 py-3 text-lg font-semibold hover:bg-red-700 transition"
        >
          SHOW ME TODAY'S DEAL
        </button>
      </div>
    </section>
  );
};
