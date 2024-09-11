import React from 'react';

export const Reviews = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Reviews</h2>
        <div className="flex justify-center space-x-6">
          {/* Repeat this block for each review */}
          <div>
            <p className="text-sm">★★★★★</p>
            <p className="text-gray-600">"Great value"</p>
          </div>
        </div>
      </div>
    </section>
  );
};
