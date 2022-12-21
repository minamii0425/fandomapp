/*
  Warnings:

  - You are about to drop the column `fanbook_number_of_distribution` on the `Fanbooks` table. All the data in the column will be lost.
  - Added the required column `fanbook_number_of_distribution_offline` to the `Fanbooks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fanbook_number_of_distribution_online` to the `Fanbooks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fanbooks" DROP COLUMN "fanbook_number_of_distribution",
ADD COLUMN     "fanbook_number_of_distribution_offline" INTEGER NOT NULL,
ADD COLUMN     "fanbook_number_of_distribution_online" INTEGER NOT NULL;
