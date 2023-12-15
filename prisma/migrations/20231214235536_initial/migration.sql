-- CreateTable
CREATE TABLE "UserAccounts" (
    "userAccountUserName" TEXT NOT NULL,
    "userAccountName" VARCHAR(512) NOT NULL,
    "userAccountEmail" VARCHAR(512),
    "userAccountEnabled" BOOLEAN NOT NULL DEFAULT false,
    "userAccountDeleted" BOOLEAN NOT NULL DEFAULT false,
    "userAccountAdministrator" BOOLEAN NOT NULL DEFAULT false,
    "userAccountSlug" VARCHAR(256) NOT NULL,
    "userAccountimageUrl" TEXT NOT NULL,
    "userAccountClerkId" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAccounts_pkey" PRIMARY KEY ("userAccountSlug")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAccounts_userAccountUserName_key" ON "UserAccounts"("userAccountUserName");

-- CreateIndex
CREATE UNIQUE INDEX "UserAccounts_userAccountEmail_key" ON "UserAccounts"("userAccountEmail");

-- CreateIndex
CREATE UNIQUE INDEX "UserAccounts_userAccountSlug_key" ON "UserAccounts"("userAccountSlug");

-- CreateIndex
CREATE UNIQUE INDEX "UserAccounts_userAccountClerkId_key" ON "UserAccounts"("userAccountClerkId");
