import Image from "next/image"
import { formatTimeAgo } from "@/utils/formatTimeAgo"
import Link from "next/link"

type BlogPostGridItemProps = {
    blogPostTitle: string,
    blogPostIntro: string,
    blogPostImage: string,
    viewCounter: number,
    blogPostSlug: string,
    blogPostPublishDate: Date,
    updatedAt: Date,
    globalTags: TagProps[],
    userAccounts: UserProps[],
}

type TagProps = {
    tag: string
    tagSlug: string
}

type UserProps = {
    userAccountName: string
    userAccountEmail: string
    userAccountSlug: string
}
export function BlogPostGridItems({
    blogPostTitle,
    blogPostIntro,
    blogPostImage,
    viewCounter,
    blogPostSlug,
    blogPostPublishDate,
    updatedAt,
    globalTags,
    userAccounts,
}: BlogPostGridItemProps) {
    return(
        // <>
        <div className="flex flex-col items-middle gap-2 w-full shadow-lg shadow-vault-menubar hover:shadow-vault-link transition duration-500 rounded-xl">
            <Link href={`/show_archive/${blogPostSlug}`} className="relative aspect-video w-full rounded-xl overflow-hidden ">
                <Image 
                src={blogPostImage}
                className="block text-vault-link col-span-3 object-fill rounded-xl grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                alt={blogPostTitle}
                width={1000} // 100%
                height={1000} // 100%
                title={blogPostTitle}
                />
            </Link>
            
            <div className="flex flex-col items-middle">
                <p className="text-vault-title mx-2 mb-1 font-bold text-4xl italic">{blogPostTitle}</p>
                <p className="text-vault-genre mx-2 mb-1 text-2xl italic">{blogPostIntro}</p>
                <p className="text-vault-text mx-2 mb-2 font-vault-title text-xl font-title">Tagged With: {globalTags.map(tag => tag.tag).join(", ")}</p>
                <p className="text-vault-text mx-2 mb-1 font-title text-xl">By: {userAccounts.map(author => author.userAccountName).join(", ")}</p>
                <p className="text-vault-text mx-2 mb-2 font-vault-title font-title text-xl">Published: {blogPostPublishDate.toUTCString()}</p>
                <p className="text-vault-text mx-2 mb-2 font-vault-title font-title">Last Updated: {updatedAt.toUTCString()}{' ('}{formatTimeAgo(updatedAt)}{')'}</p>
                <p className="text-vault-text mx-2 mb-2 font-vault-title font-title">Views: {viewCounter}</p>
            </div>
                    
        </div>
    )
}