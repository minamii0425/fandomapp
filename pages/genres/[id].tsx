import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Router, { useRouter } from "next/router";
import { genreClient } from "../../utils/axiosInstancesServerside";
import { makeSerializable } from "../../utils/util";
import { Genre } from "../../aspida_api/@types";
import { Args, Context } from "../../types/context";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Button, ButtonGroup, Heading, Tag } from "@chakra-ui/react";
import prisma from "../../utils/prisma";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const ID = Number(query.id);
  console.log(ID);

  // const response = await genreClient._id(ID).$get();

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
    props: { body: convertedResult },
  };
};

const Home = ({ body, resolvedUrl }: Context<Genre>) => {
  console.log(body);

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
