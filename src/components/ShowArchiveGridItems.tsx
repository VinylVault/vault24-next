import Image from 'next/image';
import { formatTimeAgo } from '@/utils/formatTimeAgo';
import Link from 'next/link';

type ShowArchiveGridProps = {
  blogPlaylistTitle: string;
  blogPlaylistIntro: string;
  blogPlaylistImage: string;
  viewCounter: number;
  blogPlaylistSlug: string;
  blogPlaylistPublishDate: Date;
  blogPlaylistCurrent: boolean;
  updatedAt: Date;
  globalTags: TagProps[];
  userAccounts: UserProps[];
};

type TagProps = {
  tag: string;
  tagSlug: string;
};

type UserProps = {
  userAccountName: string;
  userAccountEmail: string;
  userAccountSlug: string;
};
export function ShowArchiveGridItems({
  blogPlaylistTitle,
  blogPlaylistIntro,
  blogPlaylistImage,
  viewCounter,
  blogPlaylistSlug,
  blogPlaylistPublishDate,
  blogPlaylistCurrent,
  updatedAt,
  globalTags,
  userAccounts,
}: ShowArchiveGridProps) {
  return (
    // <>
    <div className="flex flex-col items-middle gap-2 w-full shadow-lg shadow-vault-menubar hover:shadow-vault-link transition duration-500 rounded-xl">
      <Link
        href={`/show_archive/${blogPlaylistSlug}`}
        className="relative aspect-video w-full rounded-xl overflow-hidden "
      >
        <Image
          src={blogPlaylistImage}
          className="block text-vault-link col-span-3 object-fill rounded-xl grayscale hover:grayscale-0 transition duration-500 ease-in-out"
          alt={blogPlaylistTitle}
          width={1000} // 100%
          height={1000} // 100%
          title={blogPlaylistTitle}
        />
      </Link>

      <div className="flex flex-col items-middle">
        {blogPlaylistCurrent && (
          <div className="bg-vault-menubar text-vault-live text-md font-bold text-center px-1 rounded-xl">
            CURRENT PLAYLIST
          </div>
        )}
        <p className="text-vault-title mx-2 mb-1 font-bold text-4xl italic">
          {blogPlaylistTitle}
        </p>
        <p className="text-vault-genre mx-2 mb-1 text-2xl italic">
          {blogPlaylistIntro}
        </p>
        <p className="text-vault-text mx-2 mb-2 font-vault-title text-xl font-title">
          Tagged With: {globalTags.map((tag) => tag.tag).join(', ')}
        </p>
        <p className="text-vault-text mx-2 mb-1 font-title text-xl">
          By: {userAccounts.map((author) => author.userAccountName).join(', ')}
        </p>
        <p className="text-vault-text mx-2 mb-2 font-vault-title font-title text-xl">
          Published: {blogPlaylistPublishDate.toUTCString()}
        </p>
        <p className="text-vault-text mx-2 mb-2 font-vault-title font-title">
          Last Updated: {updatedAt.toUTCString()}
          {' ('}
          {formatTimeAgo(updatedAt)}
          {')'}
        </p>
        <p className="text-vault-text mx-2 mb-2 font-vault-title font-title">
          Views: {viewCounter}
        </p>
      </div>
    </div>
  );
}
