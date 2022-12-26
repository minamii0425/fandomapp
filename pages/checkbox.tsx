import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Genre } from "../aspida_api/@types";
import { Args, Context } from "../types/context";
import { useState } from "react";
import Layout from "../components/Layout";
import { genreClient } from "../utils/axiosInstancesServerside";
import prisma from "../utils/prisma";
import CardComponent from "../components/Card";
import { Grid } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { GridItem } from "@chakra-ui/react";
import { makeSerializable } from "../utils/util";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // DB内に保存されたジャンル情報をすべて取得

  // const response = await genreClient.$get();
  const response = await prisma.genres.findMany({});

  const convertedResult = response.map((result: any) => {
    return {
      genreID: result.id,
      genreName: result.genre_name,
      genreStyle: result.genre_style,
      genreStartDate: makeSerializable(result.genre_start_date),
      genreEndDate: makeSerializable(result.genre_end_date),
      genreStartAge: result.genre_start_age,
      genreEndAge: result.genre_end_age,
      genreFollowee: result.genre_followee,
      genreFollower: result.genre_follower,
      genreFFRatio: result.genre_ff_ratio,
      genreComment: result.genre_comment,
    };
  });

  return {
    props: { body: convertedResult },
  };

  // return { props: {} };
};

const CheckBoxTest = ({ body }: Context<Genre[]>) => {
  console.log(body);
  console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`NEXT_PUBLIC_BASE_URL: ${process.env.NEXT_PUBLIC_BASE_URL}`);
  console.log(`NEXT_PUBLIC_NODE_ENV: ${process.env.NEXT_PUBLIC_NODE_ENV}`);

  const [rowChecked, setRowChecked] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const clickCheck = (rowIndex: number) => {
    console.log(rowChecked[rowIndex]);
    // checked内のうち、[rowID]番目のcheckステータスのみ反転させる
    setRowChecked(
      rowChecked.map((check, index) =>
        index === rowIndex ? !rowChecked[rowIndex] : check
      )
    );
  };

  const allCheck = (isChecked: boolean) => {
    if (isChecked) {
      setRowChecked(rowChecked.map(() => true));
    } else if (!isChecked) {
      setRowChecked(rowChecked.map(() => false));
    }
  };

  return (
    <>
      <Layout>
        <Box>
          <Stack>
            <Checkbox onChange={(e) => allCheck(e.target.checked)}>
              Select All
            </Checkbox>
            <Checkbox isChecked={rowChecked[0]} onChange={() => clickCheck(0)}>
              ラベル
            </Checkbox>
            <Checkbox isChecked={rowChecked[1]} onChange={() => clickCheck(1)}>
              ラベル
            </Checkbox>
            <Checkbox isChecked={rowChecked[2]} onChange={() => clickCheck(2)}>
              ラベル
            </Checkbox>

            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
              <GridItem>
                <CardComponent></CardComponent>
              </GridItem>
            </Grid>
          </Stack>
        </Box>
      </Layout>
    </>
  );
};

export default CheckBoxTest;
