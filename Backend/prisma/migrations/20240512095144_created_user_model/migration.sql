/*
  Warnings:

  - You are about to drop the `watchList` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "watchlist" TEXT[];

-- DropTable
DROP TABLE "watchList";
