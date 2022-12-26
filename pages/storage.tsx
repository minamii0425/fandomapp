import { supabase } from "../utils/supabase";
import { GetServerSideProps } from "next";
import FileUploader from "../components/FileUploader";
import Image from "next/image";

export const getServerSideProps: GetServerSideProps = async () => {
  // パブリックなBucketから画像の取得
  const {
    data: { publicUrl },
  } = await supabase.storage.from("fandomapp").getPublicUrl("wallcover.jpg");

  return {
    props: { body: publicUrl },
  };
};

export const Storage = (body: any) => {
  return (
    <>
      <Image src={body.body} alt="あ" width={500} height={600} priority />
      <FileUploader />
    </>
  );
};

export default Storage;
