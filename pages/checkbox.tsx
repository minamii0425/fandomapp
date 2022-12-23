import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Genre } from "../aspida_api/@types";
import { Args, Context } from "../types/context";
import { useState } from "react";
import Layout from "../components/Layout";
import { genreClient } from "../utils/axiosInstancesServerside";
import prisma from "../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // DB内に保存されたジャンル情報をすべて取得

  // const response = await genreClient.$get();
  const response = await prisma.genres.findMany({});

  return {
    props: { body: response },
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
          </Stack>
        </Box>
      </Layout>
    </>
  );
};

export default CheckBoxTest;
