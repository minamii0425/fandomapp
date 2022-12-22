import { Box, Checkbox, Stack } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Genre } from "../api/@types";
import { Args, Context } from "../types/context";
import { useState } from "react";
import Layout from "../components/Layout";
import { genreClient } from "../utils/axiosInstancesServerside";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // DB内に保存されたジャンル情報をすべて取得

  const response = await genreClient.$get();

  return {
    props: { body: response },
  };

  // return { props: {} };
};

const CheckBoxTest = ({ body }: Context<Genre[]>) => {
  console.log(body);
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
    console.log(rowChecked[rowIndex]);
  };

  console.log(rowChecked);

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
              {" "}
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
            {/* 
            <input
              type="checkbox"
              checked={checked[0]}
              onClick={() => clickCheck(0)}
            />
            <input
              type="checkbox"
              checked={checked[1]}
              onClick={() => clickCheck(1)}
            />
            <input
              type="checkbox"
              checked={checked[2]}
              onClick={() => clickCheck(2)}
            />
            <label>
              <input
                type="checkbox"
                onChange={(e) => allCheck(e.target.checked)}
              />
              トグル
            </label> */}
          </Stack>
        </Box>
      </Layout>
    </>
  );
};

export default CheckBoxTest;
