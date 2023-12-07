import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getLatestBlogPost() {
    const getBlogPost = await prisma.blogPost.findMany({
        orderBy: {
            blogPostPublishDate: 'desc',
        },
        take: 1,
    });
    prisma.$disconnect();
    return getBlogPost;
}