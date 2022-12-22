import { genreClient } from "../../utils/axiosInstancesServerside";
import { Genre } from "../../api/@types";
import { Args, Context } from "../../types/context";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Button,
  ButtonGroup,
  Checkbox,
} from "@chakra-ui/react";

// export const getServerSideProps = async () => {
//   // DB内に保存されたジャンル情報をすべて取得
//   const response = await genreClient.$get();

//   return {
//     props: { body: response },
//   };
// };

const Genres = ({ body }: Context<Genre[]>) => {
  // routerの読み込み
  const router = useRouter();

  // 各行のcheckステータスを配列で管理
  // 1行目はtrue、2行目はfalse、みたいな感じ
  const [rowChecked, setRowChecked] = useState<boolean[]>([]);

  // チェックをつけられた行のGenreIDを配列で管理
  const [checkedRowIDs, setCheckedRowIDs] = useState<number[]>([]);

  // 各チェックボックス
  const onClickRowCheck = (
    isChecked: boolean,
    rowIndex: number,
    rowID: number
  ) => {
    // checked内のうち、[rowID]番目のcheckステータスのみ反転させる
    setRowChecked(
      rowChecked.map((check, index) =>
        index === rowIndex ? !rowChecked[rowIndex] : check
      )
    );

    // チェックをつけられた行のgenreIDを管理
    if (isChecked) {
      setCheckedRowIDs([...checkedRowIDs, rowID]);
    } else if (!isChecked) {
      setCheckedRowIDs(checkedRowIDs.filter((checked) => checked !== rowID));
    }
  };

  // 1行目のチェックボックスに変更があったら発火
  // すべてのチェックボックスにチェックをつける
  const onClickAllCheck = (isChecked: boolean) => {
    if (isChecked) {
      // 存在するすべての列のIDを取得
      {
        body.map((row) => {
          checkedRowIDs.push(row.genreID!);
        });
      }

      // すべてのcheckedをtrueに
      setRowChecked(rowChecked.map(() => true));
    } else if (!isChecked) {
      // checkedRowIDsを空にする
      checkedRowIDs.length = 0;

      // すべてのcheckedをfalseにする
      setRowChecked(rowChecked.map(() => false));
    }
  };

  // 行クリック時に発火
  const onClickRow = (id: number) => {
    router.push(`/genres/${id}`);
  };

  // 新規作成ボタンクリック時に発火
  const onClickCreate = () => {
    router.push("/genres/create");
  };

  // 削除ボタンクリック時に発火
  const onClickDelete = async () => {
    await genreClient.$delete({ body: checkedRowIDs });
    router.reload();
  };

  useEffect(() => {
    setRowChecked(body.map(() => false));
    console.log("bodyの数" + body.length);
  }, [body]);

  return (
    <>
      <Layout>
        <div className="content">
          <Heading>Genres List</Heading>

          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>
                    <Checkbox
                      onChange={(e) => onClickAllCheck(e.target.checked)}
                      isDisabled={body.length === 0 ? true : false}
                    ></Checkbox>
                  </Th>
                  <Th>Genre Name</Th>
                  <Th>Genre Style</Th>
                  <Th>Start Date</Th>
                  <Th>End Date</Th>
                  <Th>Followee</Th>
                  <Th>Follower</Th>
                </Tr>
              </Thead>
              <Tbody>
                {body.length === 0 ? (
                  // 中身がなければこちら
                  <Tr>
                    <Td></Td>
                    <Td colSpan={6}>No Data</Td>
                  </Tr>
                ) : (
                  // 中身があったらこちら
                  body.map((row, i) => {
                    return (
                      <Tr key={row.genreID}>
                        <Td>
                          <Checkbox
                            isChecked={rowChecked[i]}
                            onChange={(e) =>
                              onClickRowCheck(e.target.checked, i, row.genreID!)
                            }
                          ></Checkbox>
                        </Td>
                        <Td onClick={() => onClickRow(row.genreID!)}>
                          {row.genreName}
                        </Td>
                        <Td onClick={() => onClickRow(row.genreID!)}>
                          {row.genreStyle}
                        </Td>
                        <Td onClick={() => onClickRow(row.genreID!)}>
                          {row.genreStartDate!.substring(0, 10)}
                        </Td>
                        <Td onClick={() => onClickRow(row.genreID!)}>
                          {row.genreEndDate!.substring(0, 10)}
                        </Td>
                        <Td onClick={() => onClickRow(row.genreID!)}>
                          {row.genreFollowee}
                        </Td>
                        <Td onClick={() => onClickRow(row.genreID!)}>
                          {row.genreFollower}
                        </Td>
                      </Tr>
                    );
                  })
                )}
              </Tbody>
            </Table>
          </TableContainer>

          <ButtonGroup gap="4">
            <Button onClick={onClickCreate} colorScheme="facebook">
              Create New Genre
            </Button>

            <Button
              onClick={onClickDelete}
              colorScheme="red"
              disabled={body.length === 0 ? true : false}
            >
              Delete Selected Genre
            </Button>
          </ButtonGroup>
        </div>
      </Layout>
    </>
  );
};

export default Genres;
