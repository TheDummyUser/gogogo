import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto border-b-2">
            <div className="text-sm lg:text-xl">
                <Link href="/" className="underline-offset-4 hover:text-blue-500">Hello User's</Link>
            </div>
            <div className="flex gap-4 text-sm lg:text-xl">
                <Link href="/about" className="underline-offset-4 hover:text-blue-500">/About me</Link>
                <Link href="/blogs" className="underline-offset-4 hover:text-blue-500">/Blogs</Link>
            </div>
        </header>
    )
}

export default Header