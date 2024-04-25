import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <div>
            <Header />
            <main className='lg:flex-row lg:h-[calc(100vh-80px)] max-w-7xl mx-auto py-20 px-4 space-y-5'>
                <div className='p-5 space-y-5'>
                    <p className="lg:text-6xl text-3xl font-bold mb-4 underline underline-offset-8 italic">About me:</p>
                    <p>
                        <li>I am Abhiram, A Recent Graduate from Electrical Engineering.</li>
                    </p>
                    <p>
                        <li>i have keen interest in Web Development & react native development.</li>
                    </p>
                    <p>
                        <li>Recently i started working as an intern in react native development at a small startup...,
                            Actully i am learing a lot from it.
                        </li>
                    </p>
                </div>
                <div className='space-y-5'>
                    <p className="lg:text-6xl text-3xl font-bold mb-4 underline underline-offset-8">Projects:</p>
                    <p className="text-xs">there are the few project ive done in my free time...</p>
                    <div className='space-y-5'>
                        <p className="text-base underline underline-offset-4">project 1:</p>
                        <p>
                            &#8594; Albion market, is a project Based on Albion Online MMORPG, in this project I fetch the Albion Market Api and provide a market price listing of a pertical item sold in game market.
                            <a href="http://albion-market.netlify.app" className='underline underline-offset-8'>"View More"</a>
                        </p>
                    </div>
                    <div className='space-y-5'>
                        <p className="text-base underline underline-offset-4">project 2:</p>
                        <p>
                            &#8594; this might be the finest project i've workd on till now, its based up on HackerNews.In this project i use the Hacker news api to provide a frontend view of the api usign vite(react framework with tailwind css.), <a href="http://hkernews.netlify.app" className='underline underline-offset-8'>"View More"</a>
                        </p>
                    </div>
                    <div className='space-y-5'>
                        <p className="text-base underline underline-offset-4">project 3:</p>
                        <p>
                            &#8594; And Last but Not the least, this is about the linux distro I use which is called Nixos Wiki. if you are wondering why i use this linux? its because of reproducability ig!, the distro never breaks untill or unless you do some shitty things to it! somewhere in the future i might distro hop tho!, <a href="https://www.reddit.com/r/unixporn/comments/1aqir6d/hyprland_kanagawa_colorscheme_is_op/?utm_source=share&utm_medium=web2x&context=3" className='underline underline-offset-8'>reddit post...</a>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page