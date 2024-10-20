import React from 'react'
import Markdown from "markdown-to-jsx"
import getPostMetadata from "@/utils/getPostMetadata"
import fs from 'fs'
import matter from "gray-matter"

type Params = {
    params: {
        slug: string
    }
}

function getPostContent(slug: string) {
    const folder = 'blogs/'
    const file = folder + `${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    return matter(content)
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata('blogs')
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Params) {
    const id = params?.slug ? ' ⋅ ' + params?.slug : ''
    return {
        title: `${id.replaceAll('_', ' ')}`
    }
}

const Page = ({ params }: Params) => {
    const slug = params.slug
    const post = getPostContent(slug)
    
    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="max-w-7xl w-full py-16 px-4">
                <article className="prose lg:prose-xl prose-invert mx-auto prose-headings:font-[family-name:var(--font-pixelify-sans)] prose-code:font-[family-name:var(--font-jetbrains-mono)] prose-p:font-[family-name:var(--font-jetbrains-mono)] prose-pre:font-[family-name:var(--font-jetbrains-mono)] prose-a:font-[family-name:var(--font-jetbrains-mono)] prose-ol:font-[family-name:var(--font-jetbrains-mono)] prose-ul:font-[family-name:var(--font-jetbrains-mono)] prose-blockquote:font-[family-name:var(--font-jetbrains-mono)] prose-img:font-[family-name:var(--font-pixelify-sans)] prose-figcaption:font-[family-name:var(--font-pixelify-sans)] prose-strong:font-[family-name:var(--font-pixelify-sans)]">
                    <Markdown>{post.content}</Markdown>
                </article>
            </div>
        </main>
    )
}

export default Page