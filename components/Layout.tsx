import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useContext, useState } from "react";
import { SessionContext } from "../pages/_app";
import { supabase } from "../utils/supabase";
import HeaderForLoggedInUser from "./HeaderForLoggedInUser";
import HeaderForNonLoggedInUser from "./HeaderForNonLoggedInUser";

export interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const session = useContext(SessionContext);
  console.log(`Layoutから見たsession: ${session}`);

  return (
    <>
      {/* ヘッダー */}
      {session != undefined ? (
        <HeaderForLoggedInUser></HeaderForLoggedInUser>
      ) : (
        <HeaderForNonLoggedInUser></HeaderForNonLoggedInUser>
      )}

      {/* コンテンツ */}
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
