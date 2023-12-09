/*
  Warnings:

  - Made the column `blogPostImage` on table `blogPost` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "blogPost" ALTER COLUMN "blogPostImage" SET NOT NULL;
