import React from 'react';

const EcommercePage = () => {
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>
        <div className="fixed inset-0 z-40 flex">
          <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="mt-2">
              <div className="border-b border-gray-200">
                <div
                  className="-mb-px flex space-x-8 px-4"
                  aria-orientation="horizontal"
                  role="tablist"
                >
                  <button
                    id="tabs-1-tab-1"
                    className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900"
                    aria-controls="tabs-1-panel-1"
                    role="tab"
                    type="button"
                  >
                    Women
                  </button>
                  <button
                    id="tabs-1-tab-2"
                    className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900"
                    aria-controls="tabs-1-panel-2"
                    role="tab"
                    type="button"
                  >
                    Men
                  </button>
                </div>
              </div>

              {/* Women Tab Panel */}
              <div
                id="tabs-1-panel-1"
                className="space-y-12 px-4 pb-6 pt-10"
                aria-labelledby="tabs-1-tab-1"
                role="tabpanel"
                tabIndex="0"
              >
                <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                    <div>
                      <p
                        id="mobile-featured-heading-0"
                        className="font-medium text-gray-900"
                      >
                        Featured
                      </p>
                      <ul
                        role="list"
                        aria-labelledby="mobile-featured-heading-0"
                        className="mt-6 space-y-6"
                      >
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Sleep
                          </a>
                        </li>
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Swimwear
                          </a>
                        </li>
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Underwear
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p
                        id="mobile-categories-heading"
                        className="font-medium text-gray-900"
                      >
                        Categories
                      </p>
                      <ul
                        role="list"
                        aria-labelledby="mobile-categories-heading"
                        className="mt-6 space-y-6"
                      >
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Basic Tees
                          </a>
                        </li>
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Artwork Tees
                          </a>
                        </li>
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Bottoms
                          </a>
                        </li>
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Underwear
                          </a>
                        </li>
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Accessories
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Add more grid sections for the 'Men' tab if needed */}
                </div>
              </div>

              {/* Men Tab Panel */}
              <div
                id="tabs-1-panel-2"
                className="space-y-12 px-4 pb-6 pt-10"
                aria-labelledby="tabs-1-tab-2"
                role="tabpanel"
                tabIndex="0"
              >
                <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                    <div>
                      <p
                        id="mobile-featured-heading-1"
                        className="font-medium text-gray-900"
                      >
                        Featured
                      </p>
                      <ul
                        role="list"
                        aria-labelledby="mobile-featured-heading-1"
                        className="mt-6 space-y-6"
                      >
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Casual
                          </a>
                        </li>
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Boxers
                          </a>
                        </li>
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Outdoor
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p
                        id="mobile-categories-heading"
                        className="font-medium text-gray-900"
                      >
                        Categories
                      </p>
                      <ul
                        role="list"
                        aria-labelledby="mobile-categories-heading"
                        className="mt-6 space-y-6"
                      >
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Artwork Tees
                          </a>
                        </li>
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Pants
                          </a>
                        </li>
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Accessories
                          </a>
                        </li>
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Boxers
                          </a>
                        </li>
                        <li className="flex">
                          <a href="#" className="text-gray-500">
                            Basic Tees
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Add more grid sections for Men if needed */}
                </div>
              </div>
            </div>

            {/* Add more sections like company and store links if needed */}
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Company
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Stores
                </a>
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Create an account
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
            </div>

            {/* Add a currency selector here */}
            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <form>
                <div className="inline-block">
                  <label htmlFor="mobile-currency" className="sr-only">
                    Currency
                  </label>
                  <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                    <select
                      id="mobile-currency"
                      name="currency"
                      className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                    >
                      <option>CAD</option>
                      <option>USD</option>
                      <option>AUD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Currency selector */}
              <form className="hidden lg:block lg:flex-1">
                <div className="flex">
                  <label htmlFor="desktop-currency" className="sr-only">
                    Currency
                  </label>
                  <div className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                    <select
                      id="desktop-currency"
                      name="currency"
                      className="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                    >
                      <option>CAD</option>
                      <option>USD</option>
                      <option>AUD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>

              <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                Get free delivery on orders over $100
              </p>

              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                  Create an account
                </a>
                <span className="h-6 w-px bg-gray-600" aria-hidden="true"></span>
                <a href="#" className="text-sm font-medium text-white hover:text-gray-100">
                  Sign in
                </a>
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="border-b border-gray-200">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex">
                    <div className="ml-8">
                      <div className="flex h-full justify-center space-x-8">
                        <div className="flex">
                          <div className="relative flex">
                            <button
                              type="button"
                              className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                              aria-expanded="false"
                            >
                              Women
                            </button>
                          </div>
                        </div>

                        <div className="flex">
                          <div className="relative flex">
                            <button
                              type="button"
                              className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                              aria-expanded="false"
                            >
                              Men
                            </button>
                          </div>
                        </div>

                        <a
                          href="#"
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          Company
                        </a>
                        <a
                          href="#"
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                          Stores
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Mobile menu and search */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    >
                      <span className="sr-only">Open menu</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </button>

                    {/* Search */}
                    <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </a>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <img
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                      className="h-8 w-auto"
                    />
                  </a>

                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                        <div className="hidden lg:flex">
                          <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Search</span>
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                              />
                            </svg>
                          </a>
                        </div>

                        <div className="flex">
                          <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Account</span>
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>

                      <span
                        className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                        aria-hidden="true"
                      ></span>

                      <div className="flow-root">
                        <a href="#" className="group -m-2 flex items-center p-2">
                          <svg
                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>
                          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                            0
                          </span>
                          <span className="sr-only">items in cart, view bag</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <div className="flex flex-col border-b border-gray-200 lg:border-0">
          <nav aria-label="Offers" className="order-last lg:order-first">
            <div className="mx-auto max-w-7xl lg:px-8">
              <ul
                role="list"
                className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
              >
                <li className="flex flex-col">
                  <a
                    href="#"
                    className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
                  >
                    <p className="text-sm text-gray-500">Download the app</p>
                    <p className="font-semibold text-gray-900">
                      Get an exclusive $5 off code
                    </p>
                  </a>
                </li>
                <li className="flex flex-col">
                  <a
                    href="#"
                    className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
                  >
                    <p className="text-sm text-gray-500">
                      Return when you're ready
                    </p>
                    <p className="font-semibold text-gray-900">
                      60 days of free returns
                    </p>
                  </a>
                </li>
                <li className="flex flex-col">
                  <a
                    href="#"
                    className="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
                  >
                    <p className="text-sm text-gray-500">
                      Sign up for our newsletter
                    </p>
                    <p className="font-semibold text-gray-900">
                      15% off your first order
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
            ></div>
            <div className="relative bg-gray-100 lg:bg-transparent">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                  <div className="lg:pr-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                      Focus on what matters
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                      All the charts, datepickers, and notifications in the
                      world can't beat checking off some items on a paper card.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
                      >
                        Shop Productivity
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-48 w-full sm:h-64 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-02-hero-half-width.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Trending products */}
        <section aria-labelledby="trending-heading" className="bg-white">
          <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8 lg:py-32">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
              <h2
                id="trending-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Trending products
              </h2>
              <a
                href="#"
                className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
              >
                See everything
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="relative mt-8">
              <div className="relative w-full overflow-x-auto">
                <ul
                  role="list"
                  className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                >
                  <li className="inline-flex w-64 flex-col text-center lg:w-auto">
                    <div className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg"
                          alt="Black machined steel pen with hexagonal grip and small white logo at top."
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <div className="mt-6">
                        <p className="text-sm text-gray-500">Black</p>
                        <h3 className="mt-1 font-semibold text-gray-900">
                          <a href="#">
                            <span className="absolute inset-0"></span>
                            Machined Pen
                          </a>
                        </h3>
                        <p className="mt-1 text-gray-900">$35</p>
                      </div>
                    </div>

                    <h4 className="sr-only">Available colors</h4>
                    <ul
                      role="list"
                      className="mt-auto flex items-center justify-center space-x-3 pt-6"
                    >
                      <li
                        className="h-4 w-4 rounded-full border border-black border-opacity-10"
                        style={{ backgroundColor: '#111827' }}
                      >
                        <span className="sr-only">Black</span>
                      </li>
                      <li
                        className="h-4 w-4 rounded-full border border-black border-opacity-10"
                        style={{ backgroundColor: '#fde68a' }}
                      >
                        <span className="sr-only">Brass</span>
                      </li>
                      <li
                        className="h-4 w-4 rounded-full border border-black border-opacity-10"
                        style={{ backgroundColor: '#e5e7eb' }}
                      >
                        <span className="sr-only">Chrome</span>
                      </li>
                    </ul>
                  </li>

                  {/* Add more products here */}
                </ul>
              </div>
            </div>

            <div className="mt-12 px-4 sm:hidden">
              <a
                href="#"
                className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                See everything
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section aria-labelledby="collections-heading" className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2
                id="collections-heading"
                className="text-2xl font-bold text-gray-900"
              >
                Collections
              </h2>

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Desk and Office
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Work from home accessories
                  </p>
                </div>
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                      alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Self-Improvement
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Journals and note-taking
                  </p>
                </div>
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
                      alt="Collection of four insulated travel bottles on wooden shelf."
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Travel
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Daily commute essentials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add more sections like sale, testimonials, and footer */}
      </main>
    </div>
  );
};

export default EcommercePage;
