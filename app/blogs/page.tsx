import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)] max-w-7xl mx-auto justify-between items-center py-20 px-4">
                <p className="text-6xl font-bold mb-4">coming soon...</p>
                <Image src={"/ghost-removebg-preview.png"} width={300} height={300} alt="ghost" />
            </div>
        </>
    )
}

export default page