import type { GetServerSideProps, NextApiRequest, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Router, { useRouter } from "next/router";
import { genreClient } from "../../utils/axiosInstancesServerside";
import { makeSerializable } from "../../utils/util";
import { Genre } from "../../api/@types";
import { Args, Context } from "../../types/context";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Button, ButtonGroup, Heading, Tag } from "@chakra-ui/react";

export const getServerSideProps = async ({ req, res, query }: Args) => {
  const ID = Number(query.id);
  console.log(ID);

  const response = await genreClient._id(ID).$get();

  return {
    props: { body: response },
  };
};

const Home = ({ body }: Context<Genre>) => {
  const router = useRouter();

  const onClickBack = () => {
    router.push("/genres");
  };

  const onClickUpdate = () => {
    const id = router.query.id;
    router.push(`/genres/${id}/update`);
  };

  return (
    <>
      <Layout>
        <div className="content">
          <Heading>{body.genreName}</Heading>
          <Tag>{body.genreStyle}</Tag>
        </div>

        <div>
          {body.genreStartDate}〜{body.genreEndDate}
        </div>

        <div>ジャンルにハマった時の年齢：{body.genreStartAge}</div>
        <div>ジャンルから上がった時の年齢：{body.genreEndAge}</div>
        <div>ジャンルアカフォロイー数：{body.genreFollowee}</div>
        <div>ジャンルアカフォロワー数：{body.genreFollower}</div>
        <div>ジャンルアカFF比：{body.genreFFRatio}</div>

        <div className="notification">{body.genreComment}</div>

        <ButtonGroup spacing={4}>
          <Button colorScheme="linkedin" onClick={onClickBack}>
            Back
          </Button>
          <Button colorScheme="green" onClick={onClickUpdate}>
            Update
          </Button>
        </ButtonGroup>
      </Layout>
    </>
  );
};

export default Home;
