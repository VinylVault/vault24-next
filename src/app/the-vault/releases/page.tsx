import { fetchReleases } from "@/app/api/localConnect"
import { ReleaseGridItems } from "@/components/ReleaseGridItems"

export default async function LibraryReleaseList() {

    let localReleases = undefined
    localReleases = await fetchReleases()

    return (
        <div className="flex min-h-screen flex-col items-center p-24 bg-vault-background">
            <h3 className='text-8xl font-bold font-title text-vault-title'>Release List</h3>

            <div className="grid gap-4 lg:grid-cols-5 md:grid-cols-2 grid-cols-1 mr-4">
                {localReleases.map(release => (
                    <ReleaseGridItems
                    key={release.releaseSlug}
                    {...release}
                    />
                ))}
            </div>
        </div>
    )
}