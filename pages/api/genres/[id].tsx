import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// /api/genres/[id]
const genresHandlerWithID = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // GET：指定したIDを持つジャンルを取得
  if (req.method === "GET") {
    //   const genreID = req.query.id;
    //   console.log(`genreID: ${genreID}`);

    //   const result = await prisma.genres.findUnique({
    //     where: {
    //       id: Number(genreID),
    //     },
    //   });

    //   const convertedResult = {
    //     genreID: result?.id,
    //     genreName: result?.genre_name,
    //     genreStyle: result?.genre_style,
    //     genreStartDate: result?.genre_start_date,
    //     genreEndDate: result?.genre_end_date,
    //     genreStartAge: result?.genre_start_age,
    //     genreEndAge: result?.genre_end_age,
    //     genreFollowee: result?.genre_followee,
    //     genreFollower: result?.genre_follower,
    //     genreFFRatio: result?.genre_ff_ratio,
    //     genreComment: result?.genre_comment,
    //   };

    //   res.json(convertedResult);

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
  }

  // DELETE：指定したIDを持つジャンルを削除
  else if (req.method === "DELETE") {
    const genreID = req.query.id;
    await prisma.genres.delete({
      where: {
        id: Number(genreID),
      },
    });

    console.log(res);
  }

  // PUT：指定したIDを持つジャンルを更新
  else if (req.method === "PUT") {
    const genreID = req.query.id;

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

    const result = await prisma.genres.update({
      where: {
        id: Number(genreID),
      },
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
    console.log("プット");
  }
};

export default genresHandlerWithID;
