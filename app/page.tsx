"use client"
import Link from 'next/link';
import React from 'react';
import { Cover } from '@/components/ui/cover';

const page = () => {

  return (
  <div className="h-[calc(100vh-80px)] flex justify-center items-center">
    <div className="space-y-4 lg:space-y-8 p-5">
      <div className="lg:text-6xl md:text-3xl text-xl font-[family-name:var(--font-pixelify-sans)]">
        <Cover>
        G0G0G0...
        </Cover>
      </div>
      <p className="font-[family-name:var(--font-jetbrains-mono)]">Hi Prnd, I am Abhiram. Wanna know more about me?</p>
      <div className="flex gap-4 text-sm lg:text-base items-center font-[family-name:var(--font-jetbrains-mono)]">
        <p>Visit</p>
      <Link href={'/about'} className="font-[family-name:var(--font-jetbrains-mono)] hover:underline underline-offset-4 cursor-pointer w-auto">
          / About
      </Link> 

      </div>
    </div>        
</div>
  );
};

export default page;