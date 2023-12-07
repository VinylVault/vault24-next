import { getLatestBlogPost } from '@/api/blog';
import Link from 'next/link';
import Image from 'next/image';

export default async function Contact() {
  const latestBlogPost = await getLatestBlogPost();
  return (
    <div>

    </div>
  )
}