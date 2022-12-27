import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { useToast } from "@chakra-ui/react";
import Layout from "../components/Layout";

import { useRouter } from "next/router";

const SignIn = () => {
  const toast = useToast();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // サインイン
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      toast({
        title: "LogIn Failure",
        description: "We've created your account for you.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Successfully Logged In",
        description: "We've logged in.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      router.push("/");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <Layout>
        <Stack>
          <FormControl onSubmit={onSubmit}>
            <Box>
              <FormLabel>メールアドレス</FormLabel>
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Box>
            <Box>
              <FormLabel>パスワード</FormLabel>
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <Box>
              <Button type="submit" onClick={onSubmit}>
                ログイン
              </Button>
            </Box>
          </FormControl>
        </Stack>
      </Layout>
    </>
  );
};

export default SignIn;
