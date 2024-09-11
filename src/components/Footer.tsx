import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Left Section */}
        <div>
          <h3 className="font-bold text-xl mb-4">SideDeal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Best Sellers</a></li>
            <li><a href="#" className="hover:text-red-500">New Arrivals</a></li>
            <li><a href="#" className="hover:text-red-500">Clearance</a></li>
          </ul>
        </div>
        
        {/* Center Section: Sign In Buttons */}
        <div>
          <h3 className="font-bold text-xl mb-4">Account</h3>
          <div className="flex flex-col space-y-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
              Sign in with Email
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">
              Sign in with Apple
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Sign in with Facebook
            </button>
          </div>
        </div>

        {/* Right Section: Reviews and Social Media */}
        <div>
          <h3 className="font-bold text-xl mb-4">Reviews</h3>
          <ul className="space-y-2">
            <li className="text-sm">★★★★★ Great value, really enjoyed...</li>
            <li className="text-sm">★★★★★ Great treat and probiotic...</li>
            <li className="text-sm">★★★★☆ Customer service was great...</li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-square text-2xl"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter-square text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>Membership: $5.99/month gets you free shipping on these sites:</p>
        <div className="flex justify-center space-x-6 mt-4">
          <img src="/casemates-logo.png" alt="Casemates" className="h-8"/>
          <img src="/meh-logo.png" alt="Meh" className="h-8"/>
          <img src="/side-deal-logo.png" alt="Side Deal" className="h-8"/>
        </div>
        <p className="mt-4 text-gray-400">Powered by mercatalyst</p>
      </div>
    </footer>
  );
};
