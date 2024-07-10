-- CreateTable
CREATE TABLE "ALXUSER" (
    "id" SERIAL NOT NULL,
    "gradeLevel" TEXT,
    "topic" TEXT,
    "criteria" TEXT NOT NULL,
    "standards" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ALXUSER_pkey" PRIMARY KEY ("id")
);
