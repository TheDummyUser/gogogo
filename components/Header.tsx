import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import motion from 'framer-motion'

const Header = () => {
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto border-b-2">
            <div className="text-sm lg:text-xl flex items-center space-x-2">
                <p className="font-[family-name:var(--font-pixelify-sans)]">G0G0G0</p>
                <Link href="/">
                    <Image
                        src="/ghost-removebg-preview.png"
                        alt="ghost"
                        width={20}
                        height={20}
                    />
                </Link>
            </div>
            <div className="flex gap-4 text-sm lg:text-xl items-center font-[family-name:var(--font-jetbrains-mono)]">
                <Link href="/about" className="underline-offset-4 hover:text-blue-500">/ About me</Link>
                <Link href="/blogs" className="underline-offset-4 hover:text-blue-500">/ Blogs</Link>
            </div>
        </header>
    )
}

export default Header