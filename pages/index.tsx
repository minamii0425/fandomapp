import type { GetServerSideProps, NextApiRequest, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import { genreClient } from "../utils/axiosInstancesServerside";
import { makeSerializable } from "../utils/util";
import { Genre } from "../api/@types";
import { Args, Context } from "../types/context";
import Layout from "../components/Layout";
import {
  Box,
  Button,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Home: React.FC = () => {
  // for debug
  console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(
    `process.env.NEXT_PUBLIC_NODE_ENV: ${process.env.NEXT_PUBLIC_NODE_ENV}`
  );
  console.log(`VERCEL_ENV: ${process.env.VERCEL_ENV}`);
  console.log(`NEXT_PUBLIC_BASE_URL: ${process.env.NEXT_PUBLIC_BASE_URL}`);

  if (process.env.NODE_ENV === "development") {
    console.log("npm run dev");
  } else if (process.env.NODE_ENV === "production") {
    console.log("npm run start");
    console.log(process.env.BASE_URL);
  } else {
    // Production環境はこうしないとだめそう
    console.log("vercel環境");
  }

  return (
    <>
      <Layout>
        <Heading>What&apos;s this site?</Heading>

        <Heading>Site Map</Heading>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Menu</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Blogs</Td>
                <Td>このサイトを作るにあたって使用した技術のメモ</Td>
              </Tr>
              <Tr>
                <Td>Genres</Td>
                <Td>ジャンルの新規追加・表示・更新・削除</Td>
              </Tr>
              <Tr>
                <Td>Couplings</Td>
                <Td>カップリングの新規追加・表示・更新・削除</Td>
              </Tr>
              <Tr>
                <Td>Fanfics</Td>
                <Td>
                  PixivやPictBlandに掲載したオン作品の新規追加・表示・更新・削除
                </Td>
              </Tr>
              <Tr>
                <Td>Fanbooks</Td>
                <Td>イベントで発行したオフ本の新規追加・表示・更新・削除</Td>
              </Tr>
            </Tbody>
          </Table>

          <Heading>使用コンポーネント</Heading>
          <Table>
            <Thead>
              <Tr>
                <Th>Component Name</Th>
                <Th>Summary</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>TypeScript</Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>React</Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>OpenAPI/Swagger</Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>Bulma</Td>
                <Td>CSSフレームワーク</Td>
                <Td>サイトのデザインに使用。</Td>
              </Tr>
              <Tr>
                <Td>Chakra UI</Td>
                <Td>CSSフレームワーク</Td>
                <Td>サイトのデザインに使用。</Td>
              </Tr>
              <Tr>
                <Td>Prisma</Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>Axios</Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>Aspida</Td>
                <Td></Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Layout>
    </>
  );
};

export default Home;
