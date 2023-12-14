import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { TagDisplay, UserDisplay } from '@/components/PostContents';
import { TrackGridItemsWithArt } from '@/components/TrackGridItems';
import { getOneBlogPost } from '@/api/blog';
import { ReleaseGridItems } from '@/components/ReleaseGridItems';

export const dynamic = 'force-dynamic';

type radioStationProps = {
  radioStationDetailsName: string;
  radioStationDetailsURL: string;
  radioStationDetailsSlug: string;
};

async function RadioStationDisplay({
  radioStationDetailsName,
  radioStationDetailsURL,
  radioStationDetailsSlug,
}: radioStationProps) {
  return (
    <>
      <Link
        href={radioStationDetailsURL}
        className="text-xl font-title text-center text-vault-link px-8"
      >
        {radioStationDetailsName}
      </Link>
    </>
  );
}

export default async function ShowArchiveList({
  params,
}: {
  params: { blogPostSlug: string };
}) {
  let localBlogposts = await getOneBlogPost(params.blogPostSlug);
  console.log('localBlogposts', localBlogposts);

  return (
    <div className="flex min-h-screen flex-col p-12 bg-vault-background">
      <h2 className="text-6xl font-bold font-title text-center text-vault-title">
        The Vinyl Vault Show Blog:
        <br />
        {localBlogposts?.blogPostTitle}
      </h2>
      <h3 className="text-4xl font-bold font-title text-center text-vault-genre">
        Published Date: {localBlogposts?.blogPostPublishDate.toLocaleString()}
      </h3>
      <h3 className="text-4xl font-bold font-title text-center text-vault-genre">
        Last Updated At: {localBlogposts?.updatedAt.toLocaleString()}
      </h3>
      <div className="p-6 grid gap-4 w-full md:grid-cols-2 grid-cols-1">
        <div className="grid-span-1 rounded-3xl relative w-full overflow-hidden aspect-video border-t-4 border-r-4 border-b-4 border-vault-border">
          <Image
            src={localBlogposts?.blogPostImage || '/assets/vinyl_PNG21.png'}
            alt={
              localBlogposts?.blogPostTitle ||
              'The Vinyl Vault Show - Default Show Image'
            }
            title={
              localBlogposts?.blogPostTitle ||
              'The Vinyl Vault Show - Default Show Image'
            }
            width={1000}
            height={200}
          />
        </div>
        <div className="grid-span-1 rounded-3xl border-t-4 border-l-4 items-center items-middle border-b-4 border-vault-border">
          <h2 className="px-8 pt-8 text-vault-title font-title text-4xl font-bold text-center">
            Show Details
          </h2>
          <p className="px-8 pt-2 text-vault-text font-title text-2xl text-center">
            Broadcast On:{' '}
          </p>
          <p className="px-8 pt-2 text-vault-text font-title text-2xl text-center">
            Tagged With:{' '}
          </p>
          <p className="text-center px-8">
            {localBlogposts?.globalTags.map((tags) => (
              <TagDisplay key={tags.tagSlug} {...tags} />
              //
            ))}
          </p>
          <p className="px-8 pt-2 text-vault-text font-title text-2xl text-center">
            Author:{' '}
          </p>
          <p className="text-center px-8 break-before-auto">
            {localBlogposts?.userAccounts.map((userAccount) => (
              <UserDisplay key={userAccount.userAccountSlug} {...userAccount} />
            ))}
          </p>
        </div>
      </div>
      {localBlogposts && localBlogposts?.blogPostType.length > 0 && (
        // {localBlogposts.blogPostType[0].postTypes === 'Album Review' && (
        // {localBlogposts?.libraryReleases[0].map((release) => (
        //   <ReleaseGridItems key={release.releaseSlug} {...release} />
        // ))}
        <p>poke</p>
        // )}
      )}
    </div>
  );
}
