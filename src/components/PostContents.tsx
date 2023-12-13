import Link from 'next/link';

type globalTagProps = {
  tag: string;
  tagSlug: string;
};

type socialMediaProps = {
  socialMediaPlatform: string;
  socialMediaLink: string;
  socialMediaSlug: string;
};

type userAccountProps = {
  userAccountName: string;
  userAccountSlug: string;
};

export async function TagDisplay({ tag, tagSlug }: globalTagProps) {
  return (
    <>
      <Link
        href={`/tag/${tagSlug}`}
        className="text-xl font-title text-center text-vault-link px-8"
      >
        {tag}
      </Link>
    </>
  );
}

export async function UserDisplay({
  userAccountName,
  userAccountSlug,
}: userAccountProps) {
  return (
    <>
      <Link
        href={`/author/${userAccountSlug}`}
        className="text-xl font-title text-center text-vault-link px-8"
      >
        {userAccountName}
      </Link>
    </>
  );
}
