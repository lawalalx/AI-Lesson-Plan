/*
  Warnings:

  - You are about to drop the `ALXUSER` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ALXUSER";

-- CreateTable
CREATE TABLE "Alxuser" (
    "id" SERIAL NOT NULL,
    "gradeLevel" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "criteria" TEXT NOT NULL,
    "standards" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Alxuser_pkey" PRIMARY KEY ("id")
);
