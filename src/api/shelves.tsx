import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getShelves() {
  const getShelfList = await prisma.libraryGenres.findMany();
  await prisma.$disconnect();
  return getShelfList;
}
