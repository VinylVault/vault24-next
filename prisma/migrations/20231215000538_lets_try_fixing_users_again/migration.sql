/*
  Warnings:

  - The primary key for the `UserAccounts` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "UserAccounts" DROP CONSTRAINT "UserAccounts_pkey",
ADD CONSTRAINT "UserAccounts_pkey" PRIMARY KEY ("userAccountClerkId");
