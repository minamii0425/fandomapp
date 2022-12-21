import { Heading } from "@chakra-ui/react";
import { Genre } from "../../../api/@types";
import GenreForm from "../../../components/GenreForm";
import Layout from "../../../components/Layout";
import { Args, Context } from "../../../types/context";
import { genreClient } from "../../../utils/axiosInstancesServerside";

export const getServerSideProps = async ({ res, req, query }: Args) => {
  const id = query.id as string;
  console.log(id);

  const response = await genreClient._id(id).$get();

  return {
    props: { body: response, genreID: id },
  };
};

const UpdateGenre = ({ body, genreID }: Context<Genre>) => {
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
