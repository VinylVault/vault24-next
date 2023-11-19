import Image from "next/image"
import { formatTimeAgo } from "@/utils/formatTimeAgo"

type ReleaseGridItemsProps = {
    releaseTitle: string
    releaseArtists: ReleaseArtistProps[]
    releaseYear: string
    releaseLocalImage: string
    releaseSlug: string
    releaseAddedToDiscogs: Date
}

type ReleaseArtistProps = {
    artistId: string
    artistName: string
    artistSlug: string
}
export function ReleaseGridItems({
    releaseTitle,
    releaseArtists,
    releaseLocalImage,
    releaseSlug,
    releaseAddedToDiscogs
}: ReleaseGridItemsProps) {
    return(
        <>
        <div className="flex flex-col gap-2 w-full">
            <a href={`/the-vault/releases/${releaseSlug}`} className="aspect-square w-full rounded-xl overflow-hidden">
                <Image 
                src={releaseLocalImage}
                className="text-vault-link block col-span-4  object-fill rounded-xl grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                alt={releaseTitle}
                width={1000} // 100%
                height={1000} // 100%
                title={releaseTitle}
                />
            </a>
            <div className="flex flex-col">
                <p className="text-vault-text font-bold text-lg">{releaseTitle}</p>
                <p className="text-vault-text font-title text-lg">{releaseArtists.map(artist => artist.artistName).join(", ")}</p>
                <p className="text-vault-text font-vault-title font-title text-lg">Added: {formatTimeAgo(releaseAddedToDiscogs)}</p>
            </div>
                    
        </div>
        </>
    )
}