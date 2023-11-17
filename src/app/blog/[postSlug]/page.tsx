"use client"
import { useParams } from 'next/navigation'
export default function BlogPostDetails() {
    const params = useParams()
    console.log(params)
    return (
        <div className="flex min-h-screen flex-col items-center p-24 bg-vault-background">
            <h1 className='text-6xl font-bold font-title text-vault-text'>Hello Vercel!</h1>
            <h2 className='text-4xl font-bold font-title text-vault-genre'>Welcome To The Future Home Of .....</h2>
            <h3 className='text-8xl font-bold font-title text-vault-title'>The Vinyl Vault <span className='text-vault-link capitalize'>{params.postSlug}</span> Blog Post Page</h3>
        </div>
    )
}