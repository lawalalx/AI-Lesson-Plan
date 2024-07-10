/*
  Warnings:

  - Made the column `gradeLevel` on table `ALXUSER` required. This step will fail if there are existing NULL values in that column.
  - Made the column `topic` on table `ALXUSER` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ALXUSER" ALTER COLUMN "gradeLevel" SET NOT NULL,
ALTER COLUMN "topic" SET NOT NULL;
