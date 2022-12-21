-- CreateTable
CREATE TABLE "Genres" (
    "id" SERIAL NOT NULL,
    "genre_name" VARCHAR(32) NOT NULL,
    "genre_style" VARCHAR(8) NOT NULL,
    "genre_start_date" TIMESTAMP(3) NOT NULL,
    "genre_end_date" TIMESTAMP(3) NOT NULL,
    "genre_start_age" INTEGER NOT NULL,
    "genre_end_age" INTEGER NOT NULL,
    "genre_followee" INTEGER NOT NULL,
    "genre_follower" INTEGER NOT NULL,
    "genre_ff_ratio" INTEGER NOT NULL,
    "genre_comment" VARCHAR(4096) NOT NULL,

    CONSTRAINT "Genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Couplings" (
    "id" SERIAL NOT NULL,
    "genre_id" INTEGER NOT NULL,
    "coupling_name" VARCHAR(8) NOT NULL,
    "genre_fanact" VARCHAR(8) NOT NULL,
    "coupling_style" VARCHAR(32) NOT NULL,
    "coupling_summary" VARCHAR(4096) NOT NULL,
    "coupling_top_name" VARCHAR(32) NOT NULL,
    "coupling_bottom_name" VARCHAR(32) NOT NULL,
    "coupling_top_age" INTEGER NOT NULL,
    "coupling_bottom_age" INTEGER NOT NULL,
    "coupling_top_summary" VARCHAR(4096) NOT NULL,
    "coupling_bottom_summary" VARCHAR(4096) NOT NULL,
    "coupling_top_height" INTEGER NOT NULL,
    "coupling_bottom_height" INTEGER NOT NULL,
    "coupling_top_job" VARCHAR(32) NOT NULL,
    "coupling_bottom_job" VARCHAR(32) NOT NULL,

    CONSTRAINT "Couplings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fanfics" (
    "id" SERIAL NOT NULL,
    "genre_id" INTEGER NOT NULL,
    "coupling_id" INTEGER NOT NULL,
    "fanfic_title" VARCHAR(32) NOT NULL,
    "fanfic_number_of_characters" INTEGER NOT NULL,
    "fanfic_published_date" TIMESTAMP(3) NOT NULL,
    "fanfic_style" VARCHAR(8) NOT NULL,
    "fanfic_bookmarks" INTEGER NOT NULL,
    "fanfic_summary" VARCHAR(4096) NOT NULL,
    "fanfic_rating" BOOLEAN NOT NULL DEFAULT true,
    "fanfic_cover" VARCHAR(512) NOT NULL,
    "fanfic_comment" VARCHAR(4096) NOT NULL,

    CONSTRAINT "Fanfics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fanbooks" (
    "id" SERIAL NOT NULL,
    "genre_id" INTEGER NOT NULL,
    "coupling_id" INTEGER NOT NULL,
    "fanbook_title" TEXT NOT NULL,
    "fanbook_number_of_characters" INTEGER NOT NULL,
    "fanbook_published_date" TIMESTAMP(3) NOT NULL,
    "fanbook_style" VARCHAR(8) NOT NULL,
    "fanbook_sample_bookmarks" INTEGER NOT NULL,
    "fanbook_newly_written" BOOLEAN NOT NULL,
    "fanbook_number_of_distribution" INTEGER NOT NULL,
    "fanbook_number_of_published" INTEGER NOT NULL,
    "fanbook_price" INTEGER NOT NULL,
    "fanbook_summary" VARCHAR(4096) NOT NULL,
    "fanbook_rating" BOOLEAN NOT NULL DEFAULT true,
    "fanbook_cover" VARCHAR(512) NOT NULL,
    "fanbook_comment" VARCHAR(4096) NOT NULL,

    CONSTRAINT "Fanbooks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genres_genre_name_key" ON "Genres"("genre_name");

-- CreateIndex
CREATE UNIQUE INDEX "Couplings_genre_id_key" ON "Couplings"("genre_id");

-- CreateIndex
CREATE UNIQUE INDEX "Couplings_coupling_name_key" ON "Couplings"("coupling_name");

-- CreateIndex
CREATE UNIQUE INDEX "Fanfics_genre_id_key" ON "Fanfics"("genre_id");

-- CreateIndex
CREATE UNIQUE INDEX "Fanfics_coupling_id_key" ON "Fanfics"("coupling_id");

-- CreateIndex
CREATE UNIQUE INDEX "Fanfics_fanfic_title_key" ON "Fanfics"("fanfic_title");

-- CreateIndex
CREATE UNIQUE INDEX "Fanbooks_genre_id_key" ON "Fanbooks"("genre_id");

-- CreateIndex
CREATE UNIQUE INDEX "Fanbooks_coupling_id_key" ON "Fanbooks"("coupling_id");

-- CreateIndex
CREATE UNIQUE INDEX "Fanbooks_fanbook_title_key" ON "Fanbooks"("fanbook_title");

-- AddForeignKey
ALTER TABLE "Couplings" ADD CONSTRAINT "Couplings_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fanfics" ADD CONSTRAINT "Fanfics_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fanfics" ADD CONSTRAINT "Fanfics_coupling_id_fkey" FOREIGN KEY ("coupling_id") REFERENCES "Couplings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fanbooks" ADD CONSTRAINT "Fanbooks_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fanbooks" ADD CONSTRAINT "Fanbooks_coupling_id_fkey" FOREIGN KEY ("coupling_id") REFERENCES "Couplings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
