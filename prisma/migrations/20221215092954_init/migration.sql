/*
  Warnings:

  - You are about to drop the column `fanbook_number_of_characters` on the `Fanbooks` table. All the data in the column will be lost.
  - Added the required column `fanbook_pages` to the `Fanbooks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fanbooks" DROP COLUMN "fanbook_number_of_characters",
ADD COLUMN     "fanbook_pages" INTEGER NOT NULL;
