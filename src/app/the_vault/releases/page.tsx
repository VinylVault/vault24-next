import { getAllReleases } from "@/api/releases"
import { ReleaseGridItems } from "@/components/ReleaseGridItems"
import { Suspense } from "react"
export const dynamic = 'force-dynamic'
export default async function LibraryReleaseList() {
    let localReleases = await getAllReleases()

    return (
        <div className="flex min-h-screen flex-col items-center lg:px-24 bg-vault-background">
            <h3 className='text-8xl font-bold font-title text-vault-title'>Release List</h3>

            <div className="grid gap-4 w-full lg:grid-cols-5 md:grid-cols-2 grid-cols-1 mr-4">
            <Suspense fallback={<p>Loading All Vinyl Vault Releases</p>}>
                {localReleases.map(release => (
                    <ReleaseGridItems
                    key={release.releaseSlug}
                    {...release}
                    />
                ))}
            </Suspense>
            </div>
        </div>
    )
}