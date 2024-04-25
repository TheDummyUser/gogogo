import Header from '@/components/Header';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col lg:flex-row h-[calc(100vh-80px)] max-w-7xl mx-auto justify-between items-center py-20 px-4">
        <div className="lg:w-1/2 lg:pr-8">
          <p className="text-6xl font-bold mb-4">I am Abhiram...</p>
          <p className="text-xl">The Creator of this website...</p>
        </div>
        <Link href="/about">
          <div className="border-2 p-6 rounded-lg lg:max-w-md space-y-4">
            <p className="text-xl underline underline-offset-4">About me:</p>
            <div>
              <p className="text-base mb-4">
                As I Said Earlier I am Abhiram, recently graduated from Electrical Engineering...
              </p>
              <p className="border-white">
                View More...
              </p>
            </div>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default page;


