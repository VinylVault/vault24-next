import { getOneRelease } from '@/api/releases';
export default async function TheVaultReleaseDetails({
  params,
}: {
  params: { releaseSlug: string };
}) {
  // console.log(params)

  const localRelease = await getOneRelease(params.releaseSlug);

  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-vault-background">
      <h1 className="text-6xl font-bold font-title text-vault-text">
        Hello Vercel!
      </h1>
      <h2 className="text-4xl font-bold font-title text-vault-genre">
        Welcome To The Future Home Of .....
      </h2>
      <h3 className="text-8xl font-bold font-title text-vault-title">
        <span className="text-vault-link capitalize">
          {localRelease?.releaseTitle}
        </span>{' '}
        Release Details Page
      </h3>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto">
        <p>{localRelease?.releaseTitle}</p>
      </div>
    </div>
  );
}
