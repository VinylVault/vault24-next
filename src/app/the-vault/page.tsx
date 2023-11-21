import { recentReleases } from "@/app/api/localConnect"
import { ReleaseGridItems } from "@/components/ReleaseGridItems"


export default async function TheVault() {
    
    let localRecentReleases = undefined
    localRecentReleases = await recentReleases()
    // console.log(localRecentReleases)

    return (

        <div className="flex flex-col items-center px-24 bg-vault-background">
        <h2 className='text-6xl font-bold font-title text-vault-title'>The Vinyl Vault Library</h2>
        <h3 className='text-4xl font-bold font-title text-vault-genre'>Recent Releases</h3>
        
            <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 mr-4">
                {localRecentReleases.map(release => (
                    <ReleaseGridItems
                    key={release.releaseSlug}
                    {...release}
                    />
                ))}
            </div>
        </div>
    )
}