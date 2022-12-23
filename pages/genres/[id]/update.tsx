import { Heading } from "@chakra-ui/react";
import { Genre } from "../../../aspida_api/@types";
import GenreForm from "../../../components/GenreForm";
import Layout from "../../../components/Layout";
import { Args, Context } from "../../../types/context";
import { genreClient } from "../../../utils/axiosInstancesServerside";
import { makeSerializable } from "../../../utils/util";
import prisma from "../../../lib/prisma";

export const getServerSideProps = async ({ res, req, query }: Args) => {
  const ID = query.id as string;
  console.log(ID);

  // axiosじゃなくて直接APIを呼ばないと動かない？？
  const result = await prisma.genres.findUnique({
    where: {
      id: Number(ID),
    },
  });

  const convertedResult = {
    genreID: result?.id,
    genreName: result?.genre_name,
    genreStyle: result?.genre_style,
    genreStartDate: makeSerializable(result?.genre_start_date),
    genreEndDate: makeSerializable(result?.genre_end_date),
    genreStartAge: result?.genre_start_age,
    genreEndAge: result?.genre_end_age,
    genreFollowee: result?.genre_followee,
    genreFollower: result?.genre_follower,
    genreFFRatio: result?.genre_ff_ratio,
    genreComment: result?.genre_comment,
  };

  return {
    props: { body: convertedResult, genreID: ID },
  };
};

const UpdateGenre = ({ body, genreID }: Context<Genre>) => {
  console.log(body);

  return (
    <>
      <Layout>
        <Heading>Update Genre</Heading>
        <GenreForm
          FormType="Update"
          genreID={String(genreID)}
          genreName={body.genreName}
          genreStyle={body.genreStyle}
          genreStartDate={body.genreStartDate}
          genreEndDate={body.genreEndDate}
          genreStartAge={body.genreStartAge}
          genreEndAge={body.genreEndAge}
          genreFollowee={body.genreFollowee}
          genreFollower={body.genreFollower}
          genreFFRatio={body.genreFFRatio}
          genreComment={body.genreComment}
        ></GenreForm>
      </Layout>
    </>
  );
};

export default UpdateGenre;
