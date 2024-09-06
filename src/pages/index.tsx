import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '../../public/deal-drop.png';

const SplashScreen = () => {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // Hides the splash screen after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-4 flex justify-center items-center">
            <Image src={Logo} alt="Deal Drop Logo" width={100} height={100} />
          </div>
          {/* Deal Drop Text */}
          <h1 className="text-4xl font-bold text-white">Deal Drop</h1>
        </div>
      </div>
    );
  }

  return null;
};

// Main Landing Page
const LandingPage = () => {
  return (
    <div className="bg-gray-900">
      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="pattern1"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#pattern1)"
            />
          </svg>
          <div
            className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            ></div>
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <Image
                src={Logo} // Path to the image
                alt="Deal Drop Logo"
                width={500}   // Specify the width
                height={500}  // Specify the height
                layout="responsive" // Optional, for responsive layouts
              />
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Dealdrop.ng is Africa’s first platform for Group and Bulk Buying. Join or create buying groups to purchase in bulk and enjoy massive discounts.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/login"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </Link>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Live demo <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <img
                  src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                  alt="App screenshot"
                  width="2432"
                  height="1442"
                  className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer aria-labelledby="footer-heading" className="relative">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 lg:px-8">
          <div className="border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; 2020 DealDrop, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// The main component to render SplashScreen and LandingPage
const Index = () => {
  return (
    <>
      <SplashScreen />
      <LandingPage />
    </>
  );
};

export default Index;
