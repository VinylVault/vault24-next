"use client"
import Link from "next/link"
export default function TheVaultShelvesList() {

    return (
        <div className="flex min-h-screen flex-col items-center p-24 bg-vault-background">
            <h1 className='text-6xl font-bold font-title text-vault-text'>Hello Vercel!</h1>
            <h2 className='text-4xl font-bold font-title text-vault-genre'>Welcome To The Future Home Of .....</h2>
            <h3 className='text-8xl font-bold font-title text-vault-title'>The Vinyl Vault Shelves Listing</h3>

                <Link href={'/library/shelves/shelf-1'}>Shelf 1</Link><br/>
                <Link href={'/library/shelves/shelf-2'}>Shelf 2</Link><br/>
                <Link href={'/library/shelves/shelf-3'}>Shelf 3</Link><br/>
                <Link href={'/library/shelves/shelf-4'}>Shelf 4</Link><br/>
        </div>
    )
}