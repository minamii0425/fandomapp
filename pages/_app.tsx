import "../styles/globals.css";
import type { AppProps } from "next/app";
// import "bulma/css/bulma.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useContext, useState } from "react";
import React from "react";
import { supabase } from "../utils/supabase";

export const SessionContext = React.createContext<string | undefined>(
  undefined
);

function MyApp({ Component, pageProps }: AppProps) {
  // セッションの取得
  const [pageSession, setPageSession] = useState<string | undefined>(undefined);

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    console.log("Layoutから見たログインユーザー：" + data.session?.user.email);
    setPageSession(data.session?.user.email!);
  };

  getSession();

  return (
    <SessionContext.Provider value={pageSession}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionContext.Provider>
  );
}

export default MyApp;
