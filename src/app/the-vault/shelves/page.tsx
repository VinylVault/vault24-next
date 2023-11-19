// "use client"
import { fetchShelves, importShelves } from "@/app/api/localConnect"
import Link from "next/link"
export default async function TheVaultShelvesList() {

    // await importShelves()
    let shelves = undefined
    shelves = await fetchShelves()

    return (
        <div className="flex min-h-screen flex-col items-center p-24 bg-vault-background">
            <h1 className='text-6xl font-bold font-title text-vault-text'>Hello Vercel!</h1>
            <h2 className='text-4xl font-bold font-title text-vault-genre'>Welcome To The Future Home Of .....</h2>
            <h3 className='text-8xl font-bold font-title text-vault-title'>The Vinyl Vault Shelves Listing</h3>
            {shelves.map((shelf: any) => 
                <p className='text-xl font-bold font-title text-vault-text' key={shelf}>
                    <Link href={`/the-vault/shelves/${shelf.shelfSlug}`}>{shelf.shelfName}</Link><br/>
                </p> 
            
            )}
        </div>
    )
}