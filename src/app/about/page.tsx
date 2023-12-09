/* eslint-disable react/jsx-no-comment-textnodes */
import { getLatestBlogPost } from '@/api/blog';
import Link from 'next/link';
import { getLatestPlayList } from '@/api/playlist';
import { ShowArchiveGridItems } from '@/components/ShowArchiveGridItems';
import { BlogPostGridItems } from '@/components/BlogPostGridItems';

export default async function About() {
  const latestBlogPost = await getLatestBlogPost();
  const latestPlayList = await getLatestPlayList();
  return (
    <div className="flex min-h-screen flex-col p-12 bg-vault-background">
      <h3 className="text-8xl font-bold text-center pb-4 font-title text-vault-title">
        Welcome To The Vinyl Vault
      </h3>
      <p className="text-vault-text text-xl text-left px-4 py-2">
        From his secret bunker-studio, self confessed Vinyl Addict{' '}
        <strong>Dex Vinyl</strong> will take you on a weekly guided tour of his
        enormous, eclectic, and ever-growing collection of music, from pre-WWII
        shellacs, to the very latest releases in this revived format.
      </p>
      <p className="text-vault-text text-xl text-left px-4 py-2">
        This magical mystery tour will take you through eras, artists, and
        genres that you might not expect to hear on a local radio station and
        hopefully, it might bring back a few memories too.
      </p>
      <p className="text-vault-text text-xl text-left px-4 py-2">
        Adding everything into the catalogue is a real labour of love and will
        take a considerable amount of time.
      </p>
      <p className="text-vault-text text-xl text-left px-4 py-2">
        Our team are dedicated to getting the cataloguing completed as soon as
        possible.
      </p>
      <p className="text-vault-text text-xl text-left px-4 py-2">
        At present we estimate we have in the region of 4,250 individual records
        totalling 33,000+ tracks. But we buy records regularly, both New
        Releases and Legacy Collections.
      </p>
      <p className="text-vault-text text-xl text-left px-4 py-2">
        In the Vinyl Vault, we have records that go back as far as 78rpm Pre-War
        shellac, although you won&apos;t find these in the website you will hear
        them occasionally on the show. The vast majority of our library is the
        more recognisable record, 12&quot; album, 10&quot;, and 7&quot; (and
        12&quot;) single.
      </p>
      <p className="text-vault-text text-xl text-left px-4 py-2">
        We have organised the shelves in the Vinyl Vault based on some of the
        genres listed in release details on the premier music cataloguing site
        Discogs.
      </p>
      <p className="text-vault-text text-xl text-left px-4 py-2">
        We have arranged the Vinyl Vault into Shelves which generally relate to
        musical genres, you will no doubt find the same album in many shelves.
        The genres that we have used are based on the{' '}
        <Link href="https://www.discogs.com/">Discogs</Link> genres, but we have
        added a few of our own.
      </p>
      <p className="text-vault-text text-xl text-left px-4 py-2">
        The Vinyl Vault is primarily a Radio Show, which is available for
        syndication, Dex always broadcasts the show{' '}
        <span className="text-vault-live text-4xl font-bold">LIVE</span> on the
        VinylVault Show{' '}
        <Link
          href="https://www.twitch.tv/vinylvault"
          className="text-2xl font-bold text-vault-twitch"
        >
          Twitch
        </Link>{' '}
        Channel whether he is recording a syndicated show, segment, or a live
        show. When the radio show is not live, there are occasional other live
        streams on his personal{' '}
        <Link
          href="https://www.twitch.tv/RichCodesWeb"
          className="text-vault-twitch text-2xl font-bold"
        >
          Twitch
        </Link>{' '}
        Channel, and there is usually a record being played as Dex doesn&apos;t
        own a CD player, or have a Spotify or iTunes Music account, the closest
        Dex comes to digital music is occasionally listening to music on YouTube
        or on DAB or FM radio.
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 p-4 gap-16 px-32">
      {latestBlogPost.map((blogPosts) => (
          <BlogPostGridItems
            key={blogPosts.blogPostSlug}
            {...blogPosts}
          />
        ))}
        
        {latestPlayList.map((showArchive) => (
          <ShowArchiveGridItems
            key={showArchive.blogPlaylistSlug}
            {...showArchive}
          />
        ))}
      </div>
    </div>
  );
}
