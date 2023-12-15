/*
  Warnings:

  - Made the column `userAccountimageUrl` on table `UserAccounts` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UserAccounts" ADD COLUMN     "userAccountIsLive" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "userAccountimageUrl" SET NOT NULL;
