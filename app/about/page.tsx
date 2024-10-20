import { Cover } from '@/components/ui/cover'
import React from 'react'

const Page = () => {
    return (
        <div>
            <main className='max-w-7xl mx-auto py-16 px-4'>
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div className="space-y-6 p-6">
                        <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-pixelify-sans)] underline underline-offset-4">About me</h2>
                        <ul className="space-y-4 font-[family-name:var(--font-jetbrains-mono)]">
                            <li className="flex gap-2">
                                <span>•</span>
                                <span>I am Abhiram, a React Native developer working somewhere...</span>
                            </li>
                            <li className="flex gap-2">
                                <span>•</span>
                                <span>I have a keen interest in Web Development & React Native development, with a growing passion for backend development.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Skills Section */}
                    <div className="space-y-6 p-6">
                        <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-pixelify-sans)] underline underline-offset-4">Skills</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Web Development", skills: "Html, css, javascript" },
                                { title: "Programming Languages", skills: "Python, go, typescript" },
                                { title: "Frameworks", skills: "Nextjs, react, react native" },
                                { title: "Databases", skills: "Sql, mongodb, postgresql, nosql" },
                                { title: "Tools", skills: "git, version control, postman, wireshark" }
                            ].map((category, index) => (
                                <div key={index}>
                                    <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-pixelify-sans)]">{category.title}</h3>
                                    <p className="font-[family-name:var(--font-jetbrains-mono)]">→ {category.skills}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="space-y-6 p-6">
                        <h2 className="text-4xl lg:text-5xl font-bold font-[family-name:var(--font-pixelify-sans)] underline underline-offset-4">Projects</h2>
                        <p className="text-sm font-[family-name:var(--font-jetbrains-mono)]">Projects I've done in my free time...</p>
                        
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Albion Market",
                                    description: "Based on Albion Online MMORPG, fetching the Albion Market API to provide market price listings.",
                                    link: "http://albion-market.netlify.app"
                                },
                                {
                                    title: "HackerNews Frontend",
                                    description: "A frontend view of HackerNews API using Vite and Tailwind CSS.",
                                    link: "http://hkernews.netlify.app"
                                },
                                {
                                    title: "NixOS Setup",
                                    description: "My Linux distribution setup featuring reproducibility and stability.",
                                    link: "https://www.reddit.com/r/unixporn/comments/1aqir6d/hyprland_kanagawa_colorscheme_is_op"
                                }
                            ].map((project, index) => (
                                <div key={index}>
                                    <h3 className="text-lg font-semibold mb-2 font-[family-name:var(--font-pixelify-sans)]">{project.title}</h3>
                                    <p className="font-[family-name:var(--font-jetbrains-mono)] mb-2">
                                        {project.description}
                                    </p>
                                    <Cover>
                                    <a 
                                        href={project.link}
                                        className="inline-block hover:underline underline-offset-4 font-[family-name:var(--font-pixelify-sans)]"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View More →
                                    </a>
                                    </Cover>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Page