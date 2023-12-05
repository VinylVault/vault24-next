import { ReleaseGridItems } from "@/components/ReleaseGridItems"
import { getRecentReleases } from "@/api/releases"


export default async function TheVault() {
    
    const localRecentReleases = await getRecentReleases()
    // console.log(localRecentReleases)

    return (

        <div className="flex flex-col items-center px-24 bg-vault-background">
        <h2 className='text-6xl font-bold font-title text-vault-title'>The Vinyl Vault Library</h2>
        <h3 className='text-4xl font-bold font-title text-vault-genre'>Recent Releases</h3>
        
            <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 mr-4">
                {localRecentReleases.map((releaseList: any) => (
                    <ReleaseGridItems
                    key={releaseList.releaseSlug}
                    {...releaseList}
                    />
                ))}
            </div>
        </div>
    )
}