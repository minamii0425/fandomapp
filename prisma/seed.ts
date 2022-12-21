import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.GenresCreateInput[] = [
  {
    genre_name: "MIU404",
    genre_style: "半生(ドラマ)",
    genre_start_date: new Date(2020, 7),
    genre_end_date: new Date(2022, 12),
    genre_start_age: 29,
    genre_end_age: 31,
    genre_followee: 10,
    genre_follower: 500,
    genre_ff_ratio: 50,
    genre_comment: "人生で一番ハマったジャンル。",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.genres.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
