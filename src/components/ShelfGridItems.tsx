import Image from 'next/image';

type ShelfGridItemsProps = {
  genre: string;
  genreCount: string;
  genreSlug: string;
};

export function ShelfGridItems({
  genre,
  genreCount,
  genreSlug,
}: ShelfGridItemsProps) {
  return (
    <>
      <div className="flex flex-col gap-2 w-full shadow-lg shadow-vault-menubar hover:shadow-vault-link rounded-xl">
        <a
          href={`/the_vault/releases/${genreSlug}`}
          className="aspect-video w-full rounded-xl overflow-hidden "
        >
          <Image
            src={'/assets/vinyl_PNG21.png'}
            className="text-vault-link block col-span-3 object-fill rounded-xl grayscale hover:grayscale-0 transition duration-500 ease-in-out"
            alt={'Shelf: ' + genre}
            width={1000} // 100%
            height={500} // 50%
            title={'Shelf: ' + genre}
          />
        </a>
        <div className="flex flex-col">
          <p className="text-vault-text mx-2 mb-1 font-bold text-lg">{genre}</p>
          <p className="text-vault-text mx-2 mb-1 font-title text-lg">
            {genreCount + ' Releases'}
          </p>
        </div>
      </div>
    </>
  );
}
