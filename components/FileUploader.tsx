import styles from "./FileUploader.module.scss";

import { v4 } from "uuid";
import { supabase } from "../utils/supabase";
import { Button, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

type UploadStorageArgs = {
  fileList: FileList;
  bucketName: string;
};

type ReturnUploadStorage = {
  pathname: string | null;
};

export const uploadStorage = async ({
  fileList,
  bucketName,
}: UploadStorageArgs): Promise<ReturnUploadStorage> => {
  try {
    // 送信するファイル(ひとつ)
    const file = fileList[0];

    // Bucket内でのファイル名
    const pathName = `${v4()}.jpg`;

    // アップロード
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(pathName, file);
    if (error) throw error;
    return {
      pathname: data.path,
    };
  } catch (error) {
    console.error({ error });
    return { pathname: null };
  }
};

const FileUploader = () => {
  // <input>より選択されたファイルを格納
  const [fileList, setFileList] = useState<FileList | null>();

  // クリック時に発火
  const onClickHandler = async (fileList: FileList) => {
    // 画像が選択されていなければreturn
    if (!fileList || !fileList.length) return 1;

    const { pathname } = await uploadStorage({
      fileList,
      bucketName: "fandomapp",
    });
    if (pathname) console.debug({ pathname });
  };
  return (
    <>
      <FormControl>
        <FormLabel
          htmlFor="file-upload"
          className={styles.label}
          backgroundColor="blackAlpha.100"
          padding={2}
          width={120}
          fontWeight={10}
          borderRadius={5}
        >
          <Input
            className={styles.input}
            id="file-upload"
            name="file-upload"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              setFileList(e.target?.files);
              console.log(e.target?.files);
            }}
          />
          画像を選択
        </FormLabel>
        {/* <Text>{fileList![0].name}</Text> */}
        <Button onClick={() => onClickHandler(fileList!)}>アップロード</Button>
      </FormControl>
    </>
  );
};

export default FileUploader;
