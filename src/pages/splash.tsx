import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SplashScreen() {
  const router = useRouter();

  // Redirect to login page after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login'); // Redirect to login page
    }, 3000); // 3 seconds

    // Cleanup the timer when component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-4 flex justify-center items-center">
        <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-10 w-auto"
              />
          {/* <Image src={logo} alt="Logo" width={200} height={200} /> */}
        </div>
        {/* Deal Drop Text */}
        <h1 className="text-4xl font-bold text-white">Deal Drop</h1>
      </div>
    </div>
  );
}
