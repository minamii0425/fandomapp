import { Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// /api/genres
const genresHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // GET：全ジャンルの取得
  if (req.method === "GET") {
    const results = await prisma.genres.findMany({});

    const convertedResult = results.map((result) => {
      return {
        genreID: result.id,
        genreName: result.genre_name,
        genreStyle: result.genre_style,
        genreStartDate: result.genre_start_date,
        genreEndDate: result.genre_end_date,
        genreStartAge: result.genre_start_age,
        genreEndAge: result.genre_end_age,
        genreFollowee: result.genre_followee,
        genreFollower: result.genre_follower,
        genreFFRatio: result.genre_ff_ratio,
        genreComment: result.genre_comment,
      };
    });
    res.json(convertedResult);

    // POST：ジャンルの登録
  } else if (req.method === "POST") {
    console.log("ポスト");
    const {
      genreName,
      genreStyle,
      genreStartDate,
      genreEndDate,
      genreStartAge,
      genreEndAge,
      genreFollowee,
      genreFollower,
      genreComment,
    } = req.body;

    // FF比(Follower / Followee)
    const genreFFRatio = genreFollower / genreFollowee;

    const result = await prisma.genres.create({
      data: {
        genre_name: genreName,
        genre_style: genreStyle,
        genre_start_date: new Date(genreStartDate),
        genre_end_date: new Date(genreEndDate),
        genre_start_age: genreStartAge,
        genre_end_age: genreEndAge,
        genre_followee: genreFollowee,
        genre_follower: genreFollower,
        genre_ff_ratio: genreFFRatio,
        genre_comment: genreComment,
      },
    });
    res.json(result);
    console.log("あ" + result);
  }

  // DELETE：複数ジャンルの一括削除
  else if (req.method === "DELETE") {
    console.log("デリート");

    const deleteGenreIDs = req.body;

    const result = await prisma.genres.deleteMany({
      where: {
        id: {
          in: deleteGenreIDs,
        },
      },
    });

    res.json(result);
  }
};

export default genresHandler;
