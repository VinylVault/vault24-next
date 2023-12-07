import { getLatestBlogPost } from '@/api/blog';
import Link from 'next/link';
import Image from 'next/image';

export default async function ContactAboutSyndication() {
  const latestBlogPost = await getLatestBlogPost();
  return (
    <div>

    </div>
  )
}