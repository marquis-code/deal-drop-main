import React, { useState }  from 'react';

const EcommercePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white">
      <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-16 w-auto"
                src="/Dealdrop-01.jpg"
                alt="Your Company Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Best selling
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              New Arrivals
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Clearance
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Membership
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile menu, show/hide based on menu open state. */}
        {menuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            {/* Background backdrop */}
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company Logo"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Product
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Marketplace
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </a>
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
              <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth="0" />
            </svg>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            ></div>
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  New arrivals are here
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they're still in stock.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Shop New Arrivals
                    </a>
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <div className="relative">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <div className="relative">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

      <main className='mt-44'>
        <section aria-labelledby="category-heading" className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">Shop by Category</h2>
              <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg" alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee." className="object-cover object-center group-hover:opacity-75" />
                <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50"></div>
                <div className="flex items-end p-6">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        New Arrivals
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">Shop now</p>
                  </div>
                </div>
              </div>
              <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg" alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters." className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
                <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"></div>
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Accessories
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">Shop now</p>
                  </div>
                </div>
              </div>
              <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg" alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk." className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full" />
                <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"></div>
                <div className="flex items-end p-6 sm:absolute sm:inset-0">
                  <div>
                    <h3 className="font-semibold text-white">
                      <a href="#">
                        <span className="absolute inset-0"></span>
                        Workspace
                      </a>
                    </h3>
                    <p aria-hidden="true" className="mt-1 text-sm text-white">Shop now</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:hidden">
              <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Browse all categories
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>


        <section aria-labelledby="cause-heading">
          <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
            <div className="absolute inset-0 overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg" alt="" className="h-full w-full object-cover object-center" />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 id="cause-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Long-term thinking</h2>
              <p className="mt-3 text-xl text-white">We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale approach allows us to focus on quality and reduce our impact.</p>
              <a href="#" className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">Read our story</a>
            </div>
          </div>
        </section>

        <section aria-labelledby="favorites-heading">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 id="favorites-heading" className="text-2xl font-bold tracking-tight text-gray-900">New Arrivals</h2>
              <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                Browse all New Arrivals
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
              <div className="group relative">
                <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg" alt="Model wearing women's black cotton crewneck tee." className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Black Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">$32</p>
              </div>

              <div className="group relative">
                <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg" alt="Model wearing women's off-white cotton crewneck tee." className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Off-White Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">$32</p>
              </div>

              <div className="group relative">
                <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg" alt="Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle." className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Mountains Artwork Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">$36</p>
              </div>
            </div>

            <div className="mt-6 sm:hidden">
              <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Browse all favorites
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="sale-heading">
          <div className="overflow-hidden pt-32 sm:pt-14">
            <div className="bg-gray-800">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative pb-16 pt-48 sm:pb-24">
                  <div>
                    <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                      Final Stock.
                      <br />
                      Up to 50% off.
                    </h2>
                    <div className="mt-6 text-base">
                      <a href="#" className="font-semibold text-white">
                        Shop the sale
                        <span aria-hidden="true"> &rarr;</span>
                      </a>
                    </div>
                  </div>

                  <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                    <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <img className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg" alt="" />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg" alt="" />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <img className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg" alt="" />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg" alt="" />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <img className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg" alt="" />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72" src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
 
               <section aria-labelledby="favorites-heading">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 id="favorites-heading" className="text-2xl font-bold tracking-tight text-gray-900">Clearance</h2>
              <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                See More
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
              <div className="group relative">
                <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg" alt="Model wearing women's black cotton crewneck tee." className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Black Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">$32</p>
              </div>

              <div className="group relative">
                <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg" alt="Model wearing women's off-white cotton crewneck tee." className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Off-White Basic Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">$32</p>
              </div>

              <div className="group relative">
                <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg" alt="Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle." className="h-full w-full object-cover object-center" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Mountains Artwork Tee
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">$36</p>
              </div>
            </div>

            <div className="mt-6 sm:hidden">
              <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                Browse all favorites
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
     
      <footer aria-labelledby="footer-heading" className="bg-white">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Shop</h3>
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
              <div className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Account</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">Manage Account</a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">Returns & Exchanges</a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">Redeem a Gift Card</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Connect</h3>
                  <ul role="list" className="mt-6 space-y-6">
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">Contact Us</a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">Facebook</a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">Instagram</a>
                    </li>
                    <li className="text-sm">
                      <a href="#" className="text-gray-500 hover:text-gray-600">Pinterest</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-16 md:mt-16 xl:mt-0">
              <h3 className="text-sm font-medium text-gray-900">Sign up for our newsletter</h3>
              <p className="mt-6 text-sm text-gray-500">The latest deals and savings, sent to your inbox weekly.</p>
              <form className="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address" type="text" autoComplete="email" required className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-indigo-500 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                <div className="ml-4 flex-shrink-0">
                  <button type="submit" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign up</button>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-200 py-10">
            <p className="text-sm text-gray-500">Copyright &copy; 2024 Dealdrop, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcommercePage;

