import React, { useState } from 'react';

const EcommercePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('');
  
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add to cart logic here
    console.log('Product added to cart', { selectedColor, selectedSize });
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>
          <div className="fixed inset-0 z-40 flex">
            <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/* Mobile Links */}
              {/* Additional code for mobile menu... */}
            </div>
          </div>
        </div>
      )}

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
              </div>

              <a href="#" className="flex">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>

              <div className="flex flex-1 items-center justify-end">
                <a href="#" className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center">
                  <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 flex-shrink-0" />
                  <span className="ml-3 block text-sm font-medium">CAD</span>
                  <span className="sr-only">, change currency</span>
                </a>

                <a href="#" className="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block">
                  <span className="sr-only">Search</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </a>

                <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
                  <span className="sr-only">Account</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </a>

                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          {/* Product Information */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium text-gray-900">Basic Tee</h1>
              <p className="text-xl font-medium text-gray-900">$35</p>
            </div>
            {/* Reviews */}
            <div className="mt-4">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <p className="text-sm text-gray-700">
                  3.9
                  <span className="sr-only"> out of 5 stars</span>
                </p>
                <div className="ml-1 flex items-center">
                  <svg className="h-5 w-5 flex-shrink-0 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 15l-5.5 3.5L6.7 12.5 2 9l6-0.3L10 3l2 5.7h6l-4.7 3.5 1.2 5.5L10 15z" />
                  </svg>
                  {/* Add more star SVGs and review details */}
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <h2 className="sr-only">Images</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg" alt="Back of women's Basic Tee in black." className="rounded-lg lg:col-span-2 lg:row-span-2" />
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg" alt="Side profile of women's Basic Tee in black." className="hidden rounded-lg lg:block" />
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg" alt="Front of women's Basic Tee in black." className="hidden rounded-lg lg:block" />
            </div>
          </div>

          <div className="mt-8 lg:col-span-5">
            <form onSubmit={handleSubmit}>
              {/* Color picker */}
              <div>
                <h2 className="text-sm font-medium text-gray-900">Color</h2>
                <fieldset className="mt-2">
                  <div className="flex items-center space-x-3">
                    <label
                      aria-label="Black"
                      className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ${selectedColor === 'Black' ? 'ring ring-offset-1 ring-gray-900' : ''}`}
                    >
                      <input type="radio" name="color-choice" value="Black" className="sr-only" onChange={() => handleColorChange('Black')} />
                      <span className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"></span>
                    </label>
                    <label
                      aria-label="Heather Grey"
                      className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ${selectedColor === 'Heather Grey' ? 'ring ring-offset-1 ring-gray-400' : ''}`}
                    >
                      <input type="radio" name="color-choice" value="Heather Grey" className="sr-only" onChange={() => handleColorChange('Heather Grey')} />
                      <span className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-400"></span>
                    </label>
                  </div>
                </fieldset>
              </div>

              {/* Size picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900">Size</h2>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">See sizing chart</a>
                </div>
                <fieldset className="mt-2">
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    {['XXS', 'XS', 'S', 'M', 'L', 'XL'].map((size) => (
                      <label
                        key={size}
                        className={`flex cursor-pointer items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase ${selectedSize === size ? 'ring-2 ring-indigo-500 ring-offset-2' : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50'}`}
                      >
                        <input type="radio" name="size-choice" value={size} className="sr-only" onChange={() => handleSizeChange(size)} />
                        <span>{size}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* Add to Cart Button */}
              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </form>

            {/* Product details */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>
              <div className="prose prose-sm mt-4 text-gray-500">
                <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee its own look.</p>
                <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
              </div>
            </div>

            {/* Fabric & Care */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium text-gray-900">Fabric & Care</h2>
              <div className="prose prose-sm mt-4 text-gray-500">
                <ul>
                  <li>Only the best materials</li>
                  <li>Ethically and locally made</li>
                  <li>Pre-washed and pre-shrunk</li>
                  <li>Machine wash cold with similar colors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews section */}
        <section aria-labelledby="reviews-heading" className="mt-16 sm:mt-24">
          <h2 id="reviews-heading" className="text-lg font-medium text-gray-900">Recent reviews</h2>

          <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
            <div className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div className="flex items-center xl:col-span-1">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 flex-shrink-0 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M10 15l-5.5 3.5L6.7 12.5 2 9l6-0.3L10 3l2 5.7h6l-4.7 3.5 1.2 5.5L10 15z" />
                      </svg>
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-700">5<span className="sr-only"> out of 5 stars</span></p>
                </div>
                <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">Can't say enough good things</h3>
                  <div className="mt-3 space-y-6 text-sm text-gray-500">
                    <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
                    <p>The product quality is amazing, it looks and feels even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p className="font-medium text-gray-900">Risako M</p>
                <time dateTime="2021-01-06" className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0">May 16, 2021</time>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 py-20">
            <div className="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16">
              {/* Image section */}
              <div className="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1">
                <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" className="h-8 w-auto" />
              </div>

              {/* Sitemap sections */}
              <div className="col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2">
                <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Products</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      <li className="text-sm">
                        <a href="#" className="text-gray-500 hover:text-gray-600">Bags</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-500 hover:text-gray-600">Tees</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-500 hover:text-gray-600">Objects</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-500 hover:text-gray-600">Home Goods</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-500 hover:text-gray-600">Accessories</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Company</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      <li className="text-sm">
                        <a href="#" className="text-gray-500 hover:text-gray-600">Who we are</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-500 hover:text-gray-600">Sustainability</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-500 hover:text-gray-600">Press</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-500 hover:text-gray-600">Careers</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-500 hover:text-gray-600">Terms & Conditions</a>
                      </li>
                      <li className="text-sm">
                        <a href="#" className="text-gray-500 hover:text-gray-600">Privacy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Customer Service</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">Contact</a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">Shipping</a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">Returns</a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">Warranty</a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">Secure Payments</a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">FAQ</a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">Find a store</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Newsletter section */}
              <div className="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1">
                <h3 className="text-sm font-medium text-gray-900">Sign up for our newsletter</h3>
                <p className="mt-6 text-sm text-gray-500">The latest deals and savings, sent to your inbox weekly.</p>
                <form className="mt-2 flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    type="email"
                    required
                    className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                  <div className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 py-10 text-center">
            <p className="text-sm text-gray-500">&copy; 2021 Your Company, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcommercePage;
