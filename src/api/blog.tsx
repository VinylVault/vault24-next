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
        take: 1,
    });
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
    });
    await prisma.$disconnect();
    return getBlogPost;
}