import Image from 'next/image';
import { getAllPlayLists } from '@/api/playlist';
import { Metadata } from 'next';
import { ShowArchiveGridItems } from '@/components/ShowArchiveGridItems';
import { getAllBlogPosts } from '@/api/blog';
import { BlogPostGridItems } from '@/components/BlogPostGridItems';

export const dynamic = 'force-dynamic';

export default async function ShowArchiveList() {
  let localBlogPosts = await getAllBlogPosts();
  // console.log(localBlogPosts);

  return (
    <div className="flex min-h-screen flex-col items-center p-12 bg-vault-background">
      <h2 className="text-6xl font-bold font-title text-vault-title">
        The Vinyl Vault Blog
      </h2>
      <h3 className="text-4xl font-bold font-title text-vault-genre">
        Catch Up On Articles You May Have Missed
      </h3>
      <div className="grid gap-4 w-full md:grid-cols-3 grid-cols-1 py-8 mr-4">
        {localBlogPosts.map((blogPosts) => (
          <BlogPostGridItems key={blogPosts.blogPostSlug} {...blogPosts} />
        ))}
      </div>
    </div>
  );
}
