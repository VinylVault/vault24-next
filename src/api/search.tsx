import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function SearchReleases(searchTerm: string) {
  const searchResults = await prisma.libraryReleases.findMany({});
}

export async function SearchArtists(searchTerm: string) {
  const searchResults = await prisma.libraryArtists.findMany({});
}

export async function SearchTracks(searchTerm: string) {
  const searchResults = await prisma.libraryTracks.findMany({});
}
