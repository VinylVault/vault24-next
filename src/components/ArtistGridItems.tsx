import Image from 'next/image';
import { formatTimeAgo } from '@/utils/formatTimeAgo';
import Link from 'next/link';

type ArtistGridItemsProps = {
  artistName: string;
  artistReleaseQuantity: number;
  artistTrackQuantity: number;
  artistSlug: string;
  artistLibrary: boolean;
};

export function ArtistGridItems({
  artistName,
  artistReleaseQuantity,
  artistTrackQuantity,
  artistSlug,
  artistLibrary,
}: ArtistGridItemsProps) {
  return (
    <>
      {artistLibrary && (
        <div className=" flex flex-col gap-2 w-full shadow-lg shadow-vault-menubar hover:shadow-vault-link transition duration-500 rounded-xl">
          <Link
            href={`/the_vault/artists/${artistSlug}`}
            className="relative align-middle content-middle py-auto font-title px-4 py-2 w-full rounded-xl overflow-hidden text-vault-link text-4xl text-center"
          >
            {artistName}
          </Link>

          <div className="flex flex-col align-bottom content-bottom bottom">
            <p className="text-vault-text mx-2 mb-1 font-title text-lg">
              <strong>Releases: </strong>
              {artistReleaseQuantity}
            </p>
            <p className="text-vault-text mx-2 mb-1 font-title text-lg">
              <strong>Tracks: </strong>
              {artistTrackQuantity}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
