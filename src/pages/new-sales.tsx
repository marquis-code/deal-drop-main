import React from 'react';

const RelatedProducts = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Customers also bought</h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          <div>
            <div className="relative">
              <div className="relative h-72 w-full overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg"
                  alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative mt-4">
                <h3 className="text-sm font-medium text-gray-900">Zip Tote Basket</h3>
                <p className="mt-1 text-sm text-gray-500">White and black</p>
              </div>
              <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
                <p className="relative text-lg font-semibold text-white">$140</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Add to bag<span className="sr-only">, Zip Tote Basket</span>
              </a>
            </div>
          </div>

          {/* More products can be added here */}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
