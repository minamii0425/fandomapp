import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import Layout from "../components/Layout";
import { supabase } from "../utils/supabase";

const SignUp = () => {
  // 変数の設定
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  // ユーザーの登録
  const onSubmit = async (e: any) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      throw error;
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
              <FormLabel>パスワード（確認）</FormLabel>
              <Input
                type="password"
                required
                value={passwordConf}
                onChange={(e) => setPasswordConf(e.target.value)}
              />
            </Box>
            <Box>
              <Button type="submit">サインアップ</Button>
            </Box>
          </FormControl>
        </Stack>
      </Layout>
    </>
  );
};

export default SignUp;
