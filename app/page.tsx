import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
      <header className="flex justify-between p-5 max-w-7xl mx-auto border-b-2">
        <div className='lg:text-xl text-xs'>
          <Link href="/" className='underline underline-offset-4 hover:text-blue-500 hover:text-xl'>Hello User's</Link>
        </div>
        <div className="flex gap-4 lg:text-xl text-xs">
          <Link href="#" className='underline underline-offset-4 hover:text-blue-500 hover:text-xl'>/About me</Link>
          <Link href="#" className='underline underline-offset-4 hover:text-blue-500 hover:text-xl'>/Blogs</Link>
        </div>
      </header>


      <main>
        <div className="lg:flex max-w-7xl mx-auto">
          <div className="flex flex-col justify-center lg:h-[calc(100vh-72px)] h-[calc(100vh-300px)] p-5">
            <p className="text-6xl font-bold">I am Abhiram</p>
            <p>The Creator of this website...</p>
          </div>

          <div className="flex ml-5 mr-5 flex-col justify-center p-5 space-y-5 border lg:pt-5 lg:pb-5  lg:m-60 lg:mr-0 rounded-3xl h-auto">
            <p className="text-xl font-bold underline underline-offset-4">About me:</p>
            <p className='text-sm'>As I Said Earlier I am Abhiram, recently graduated from Electrical Engineering...</p>
            <p className='text-xs flex justify-end'>View More...</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
