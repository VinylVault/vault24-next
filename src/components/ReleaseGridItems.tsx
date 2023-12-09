import Image from "next/image"
import { formatTimeAgo } from "@/utils/formatTimeAgo"
import Link from "next/link"

type ReleaseGridItemsProps = {
    releaseTitle: string
    libraryArtists: ReleaseArtistProps[]
    releaseYear: number
    releaseLocalImage: string
    releaseSlug: string
    releaseAddedToDiscogs: Date
    releaseLastPlayed: Date
    releaseIsNew: boolean
    releaseIsNewAddition: boolean
    libraryShelves: ReleaseShelfProps[]
}

type ReleaseShelfProps = {
    shelfName: string
    shelfSlug: string
}

type ReleaseArtistProps = {
    artistId: string
    artistName: string
    artistSlug: string
}
export function ReleaseGridItems({
    releaseTitle,
    libraryArtists,
    releaseLocalImage,
    releaseSlug,
    releaseAddedToDiscogs,
    releaseLastPlayed,
    releaseIsNew,
    releaseIsNewAddition
}: ReleaseGridItemsProps) {
    return(
        // <>
        <div className="flex flex-col items-middle gap-2 w-full shadow-lg shadow-vault-menubar hover:shadow-vault-link transition duration-500 rounded-xl">
            <Link href={`/the_vault/releases/${releaseSlug}`} className="relative aspect-square w-full rounded-xl overflow-hidden ">
                <Image 
                src={releaseLocalImage}
                className="block text-vault-link col-span-3 object-fill rounded-xl grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                alt={releaseTitle}
                width={1000} // 100%
                height={1000} // 100%
                title={releaseTitle}
                />
            </Link>
            
            <div className="flex flex-col items-middle">
                {releaseIsNew && <div className="bg-vault-menubar text-vault-title text-sm text-center px-1 rounded-xl">
                    <p>New Release</p>
                </div>}
                {releaseIsNewAddition && <div className="bg-vault-menubar text-vault-title text-sm text-center px-1 rounded-xl">
                    <p>New Addition</p>
                </div>}
                <p className="text-vault-text mx-2 mb-1 font-bold text-lg">{releaseTitle}</p>
                <p className="text-vault-text mx-2 mb-1 font-title text-lg">{libraryArtists.map(artist => artist.artistName).join(", ")}</p>
                <p className="text-vault-text mx-2 mb-2 font-vault-title font-title text-lg">Added: {formatTimeAgo(releaseAddedToDiscogs)}</p>
                <p className="text-vault-text mx-2 mb-2 font-vault-title font-title text-lg">Last Played: {formatTimeAgo(releaseLastPlayed)}</p>
            </div>
                    
        </div>
        // </>
    )
}