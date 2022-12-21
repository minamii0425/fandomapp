/*
  Warnings:

  - You are about to drop the column `genre_fanact` on the `Couplings` table. All the data in the column will be lost.
  - Added the required column `coupling_fanact` to the `Couplings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Couplings" DROP COLUMN "genre_fanact",
ADD COLUMN     "coupling_fanact" VARCHAR(8) NOT NULL;
