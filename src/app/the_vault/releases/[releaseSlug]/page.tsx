"use client"
import { fetchReleaseDetails } from '@/app/api/localConnect'
import { useParams } from 'next/navigation'
import { ReleaseGridItems } from '@/components/ReleaseGridItems'
export default function TheVaultReleaseDetails() {
    const params = useParams()
    console.log(params)

    let localRelease = undefined
    localRelease = fetchReleaseDetails(params.releaseSlug.toString())

    return (
        <div className="flex min-h-screen flex-col items-center p-24 bg-vault-background">
            <h1 className='text-6xl font-bold font-title text-vault-text'>Hello Vercel!</h1>
            <h2 className='text-4xl font-bold font-title text-vault-genre'>Welcome To The Future Home Of .....</h2>
            <h3 className='text-8xl font-bold font-title text-vault-title'>The Vinyl Vault <span className='text-vault-link capitalize'>{params.releaseSlug}</span> Release Details Page</h3>
            <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 mr-4">
                {localRelease.map(release => (
                    <ReleaseGridItems
                    key={release.releaseSlug}
                    {...release}
                    />
                ))}
            </div>
        </div>
    )
}