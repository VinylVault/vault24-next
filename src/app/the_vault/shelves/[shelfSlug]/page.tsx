"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
export default function TheVaultShelfDetails() {
    const params = useParams()
    console.log(params)
    return (
        <div className="flex flex-col items-center p-24 bg-vault-background">
            <h1 className='text-6xl font-bold font-title text-vault-text'>Hello Vercel!</h1>
            <h2 className='text-4xl font-bold font-title text-vault-genre'>Welcome To The Future Home Of .....</h2>
            <h3 className='text-8xl font-bold font-title text-vault-title'>The Vinyl Vault <span className='text-vault-style capitalize'>{params.shelfSlug}</span> Shelf Details Page</h3>
            <Link href={'/the_vault/shelves'}>Back To Shelf Listing</Link>
        </div>
    )
}