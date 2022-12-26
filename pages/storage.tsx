import { GetServerSideProps } from "next";
import { supabase } from "../utils/supabase.js";

type Props = {
  url: string;
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   // const { publicURL } = supabase.storage
//   //   .from("avatars")
//   //   .getPublicUrl("avatar.JPG");
//   // return {
//   //   props: {
//   //     url: publicURL,
//   //   },
//   // };
// };

const Storage = () => {
  return <></>;
};

export default Storage;
