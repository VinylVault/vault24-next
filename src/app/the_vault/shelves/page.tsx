// "use client"
import { ShelfGridItems } from '@/components/ShelfGridItems';
import Link from 'next/link';
import { getShelves } from '@/api/shelves';
export const dynamic = 'force-dynamic';

export default async function TheVaultShelvesList() {
  const shelfData = await getShelves();
  console.log(shelfData);

  return (
    <div className="flex flex-col items-center p-24 bg-vault-background">
      <h1 className="text-6xl font-bold font-title text-vault-text">
        Hello Vercel!
      </h1>
      <h2 className="text-4xl font-bold font-title text-vault-genre">
        Welcome To The Future Home Of .....
      </h2>
      <h3 className="text-8xl font-bold font-title text-vault-title">
        The Vinyl Vault Shelves Listing
      </h3>

      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mr-4">
        {shelfData.map((shelf: any) => (
          <ShelfGridItems key={shelf.shelfSlug} {...shelf} />
        ))}
      </div>
    </div>
  );
}
