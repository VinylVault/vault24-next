import Image from 'next/image';
import { formatTimeAgo } from '@/utils/formatTimeAgo';

type ReleaseDetailsProps = {
  releaseTitle: string;
  releaseArtists: ReleaseArtistProps[];
  releaseYear: string;
  releaseLocalImage: string;
  releaseSlug: string;
  releaseAddedToDiscogs: Date;
  releaseIsNew: boolean;
};

type ReleaseArtistProps = {
  artistId: string;
  artistName: string;
  artistSlug: string;
};
export function ReleaseDetails({
  releaseTitle,
  releaseArtists,
  releaseLocalImage,
  releaseSlug,
  releaseAddedToDiscogs,
  releaseIsNew,
}: ReleaseDetailsProps) {
  return (
    <div className="flex flex-col gap-2 shadow-lg shadow-vault-menubar hover:shadow-vault-link transition duration-500 rounded-xl">
      <a
        href={`/the_vault/releases/${releaseSlug}`}
        className="relative aspect-square w-full rounded-xl overflow-hidden "
      >
        <Image
          src={releaseLocalImage}
          className="block text-vault-link col-span-3 object-fill rounded-xl grayscale hover:grayscale-0 transition duration-500 ease-in-out"
          alt={releaseTitle}
          width={1000} // 100%
          height={1000} // 100%
          title={releaseTitle}
        />
      </a>

      <div className="flex flex-col">
        {releaseIsNew && (
          <div className="bg-vault-menubar text-vault-title text-sm text-center px-1 rounded-xl">
            <p>New Release</p>
          </div>
        )}
        <p className="text-vault-text mx-2 mb-1 font-bold text-lg">
          {releaseTitle}
        </p>
        <p className="text-vault-text mx-2 mb-1 font-title text-lg">
          {releaseArtists.map((artist) => artist.artistName).join(', ')}
        </p>
        <p className="text-vault-text mx-2 mb-2 font-vault-title font-title text-lg">
          Added: {formatTimeAgo(releaseAddedToDiscogs)}
        </p>
      </div>
    </div>
  );
}
