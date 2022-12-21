import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import WithSubnavigation from "./Header";

export interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <>
      {/* ヘッダー */}
      <WithSubnavigation></WithSubnavigation>

      {/* コンテンツ */}
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
