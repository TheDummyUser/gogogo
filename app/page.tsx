"use client"
import Header from '@/components/Header';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const page = () => {

  const text = "I am Abhiram...".split(" ");
  const text2 = "The Creator of this website...".split(" ");
  return (
    <div>
      <Header />
      <main className="flex flex-col lg:flex-row h-[calc(100vh-80px)] max-w-7xl mx-auto justify-between items-center py-20 px-4">
        <div className="lg:w-1/2 lg:pr-8">
          <p className="text-6xl font-bold">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>
          <p>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 0.5 / 10,
              }}
            >
              {text2.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </motion.span>
          </p>
        </div>

        <Link href="/about">
          <motion.div
            className="border-2 p-6 rounded-lg lg:max-w-md space-y-4"
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "backOut",
              delay: 0.2,
            }}
          >
            <p className="text-xl underline underline-offset-4">About me:</p>
            <div>
              <p className="text-base mb-4">
                As I Said Earlier I am Abhiram, recently graduated from Electrical Engineering...
              </p>
              <p className="border-white flex justify-end">
                View More...
              </p>
            </div>
          </motion.div>
        </Link>
      </main>
    </div>
  );
};

export default page;


