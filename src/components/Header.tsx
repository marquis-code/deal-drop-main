import React from 'react';

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-6">
          <div className="text-sm flex items-center">
            <i className="fas fa-shield-alt mr-2"></i>
            Membership
          </div>
          <div className="text-sm flex items-center">
            <i className="fas fa-shipping-fast mr-2"></i>
            Free Shipping
          </div>
          <div className="text-sm flex items-center">
            <i className="fas fa-bolt mr-2"></i>
            Best Sellers
          </div>
        </div>
      </div>
    </header>
  );
};
