/*
  Warnings:

  - Made the column `blogPlaylistImage` on table `blogPlaylist` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `tag` to the `globalTags` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "blogPlaylist" ALTER COLUMN "blogPlaylistImage" SET NOT NULL;

-- AlterTable
ALTER TABLE "globalTags" ADD COLUMN     "tag" VARCHAR(512) NOT NULL;
