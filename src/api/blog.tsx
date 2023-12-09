import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getLatestBlogPost() {
    const getBlogPost = await prisma.blogPost.findMany({
        orderBy: {
            blogPostPublishDate: 'desc',
        },
        where: {
            blogPostPublished: true
        },
        include: {
            userAccounts: {
                select: {
                    userAccountName: true,
                    userAccountEmail: true,
                    userAccountSlug: true
                }
            },
            globalTags: true
        },
        take: 1,
    });
    console.log(getBlogPost);
    await prisma.$disconnect();
    return getBlogPost; 
}

export async function getAllBlogPosts() {
    const getBlogPost = await prisma.blogPost.findMany({
        orderBy: {
            blogPostPublishDate: 'desc',
        },
        where: {
            blogPostPublished: true
        },
        include: {
            userAccounts: {
                select: {
                    userAccountName: true,
                    userAccountEmail: true,
                    userAccountSlug: true
                }
            },
            globalTags: true
        },
    });
    console.log(getBlogPost);
    await prisma.$disconnect();
    return getBlogPost;
}