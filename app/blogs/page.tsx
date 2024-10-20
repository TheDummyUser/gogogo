import Image from 'next/image'
import { Cover } from '@/components/ui/cover'
import getPostMetadata from '@/utils/getPostMetadata'
import Link from 'next/link'
import React from 'react'
import { div } from 'framer-motion/client'

const images = [
    '/assets/images/img1.jpg',
    '/assets/images/img2.jpg',
]
const page = () => {
    const random = Math.floor(Math.random() * images.length)
    const postMetaData = getPostMetadata('blogs')
    return (
        <div className='h-[calc(100vh-80px)] max-w-7xl mx-auto'>
            {/* Apply rounded borders to the image */}
            <Image 
                src={random === 0 ? images[0] : images[1]} 
                alt={'image'} 
                width={1000} 
                height={100} 
                className="w-full p-10 lg:h-[calc(40vh-80px)]  object-cover rounded-lg overflow-hidden" 
                priority 
            />

            <div className="space-y-4 lg:space-y-8 p-5">
                {postMetaData.map((post) => {
                    return (
                        <CardComp
                            key={post.slug}
                            title={post.title}
                            description={post.description}
                            slug={post.slug}
                            timeStamp={post.date}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const CardComp = ({ title, description, slug, timeStamp }: { title: string, description: string, slug: string, timeStamp: string }) => {
    return (
        <div className='w-full h-auto border-2 p-5'>
            <Link href={`/blogs/${slug}`} className='space-y-4'>
            <div className="flex justify-between">
                <p className="font-[family-name:var(--font-pixelify-sans)] lg:text-2xl md:text-lg text-base">{title}</p>
                <p className="font-[family-name:var(--font-jetbrains-mono)] underline text-sm">{timeStamp}</p>
            </div>
            <p className="font-[family-name:var(--font-jetbrains-mono)]">
                {description}
            </p>
            </Link>
        </div>
    )
}

export default page