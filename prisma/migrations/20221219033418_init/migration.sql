-- AlterTable
ALTER TABLE "Genres" ALTER COLUMN "genre_style" DROP NOT NULL,
ALTER COLUMN "genre_start_date" DROP NOT NULL,
ALTER COLUMN "genre_end_date" DROP NOT NULL,
ALTER COLUMN "genre_start_age" DROP NOT NULL,
ALTER COLUMN "genre_end_age" DROP NOT NULL,
ALTER COLUMN "genre_followee" DROP NOT NULL,
ALTER COLUMN "genre_follower" DROP NOT NULL,
ALTER COLUMN "genre_ff_ratio" DROP NOT NULL,
ALTER COLUMN "genre_comment" DROP NOT NULL;
