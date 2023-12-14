import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getGenres() {
  const getShelfList = await prisma.libraryGenres.findMany();
  return getShelfList;
}
