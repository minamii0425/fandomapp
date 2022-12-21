import { Heading } from "@chakra-ui/react";
import GenreForm from "../../components/GenreForm";
import Layout from "../../components/Layout";

const Genres = () => {
  return (
    <>
      <Layout>
        <Heading>Create new genre</Heading>
        <GenreForm FormType="Create" />
      </Layout>
    </>
  );
};

export default Genres;
