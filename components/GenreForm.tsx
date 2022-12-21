import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  GenreComment,
  GenreEndAge,
  GenreEndDate,
  GenreFFRatio,
  GenreFollowee,
  GenreFollower,
  GenreID,
  GenreName,
  GenreStartAge,
  GenreStartDate,
  GenreStyle,
} from "../api/@types";
import { genreClient } from "../utils/axiosInstancesServerside";

export interface GenreFormProp {
  FormType: string;
  genreID?: string;
  genreName?: GenreName;
  genreStyle?: GenreStyle;
  genreStartDate?: GenreStartDate;
  genreEndDate?: GenreEndDate;
  genreStartAge?: GenreStartAge;
  genreEndAge?: GenreEndAge;
  genreFollowee?: GenreFollowee;
  genreFollower?: GenreFollower;
  genreFFRatio?: GenreFFRatio;
  genreComment?: GenreComment;
}

const GenreForm = (props: GenreFormProp) => {
  // NextRouterの読み込み
  const router = useRouter();

  // 変数
  // ジャンル名
  const [genreName, setGenreName] = useState<GenreName>(props.genreName || "");

  // ジャンル傾向
  const genreStyleOption = [
    { value: "漫画", option: "漫画" },
    { value: "小説", option: "小説" },
    { value: "アニメ", option: "アニメ" },
    { value: "半生", option: "半生" },
    { value: "生", option: "生" },
  ];
  const [genreStyle, setGenreStyle] = useState<GenreStyle>(
    props.genreStyle || "select genre style"
  );

  const onChangeGenreStyle = (e: any) => {
    setGenreStyle(e.target.value);
  };

  // ジャンルにハマった年月日
  const initialGenreStartDate = props.genreStartDate?.substring(0, 10);
  const [genreStartDate, setGenreStartDate] = useState<GenreStartDate>(
    initialGenreStartDate || new Date().toString()
  );

  // ジャンルから上がった年月日
  const initialGenreEndDate = props.genreEndDate?.substring(0, 10);
  const [genreEndDate, setGenreEndDate] = useState<GenreEndDate>(
    initialGenreEndDate || new Date().toString()
  );

  // ジャンルにハマった時の年齢
  const [genreStartAge, setGenreStartAge] = useState<GenreStartAge>(
    props.genreStartAge || 0
  );

  const onChangeGenreStartAge = (e: any) => {
    const startAge = Number(e.target.value);
    setGenreStartAge(startAge);
  };

  // ジャンルから上がった時の年齢
  const [genreEndAge, setGenreEndAge] = useState<GenreEndAge>(
    props.genreEndAge || 0
  );

  const onChangeGenreEndAge = (e: any) => {
    const EndAge = Number(e.target.value);
    setGenreEndAge(EndAge);
  };

  // ジャンルアカフォロイー数
  const [genreFollowee, setGenreFollowee] = useState<GenreFollowee>(
    props.genreFollowee || 0
  );

  const onChangeGenreFollowee = (e: any) => {
    const Followee = Number(e.target.value);
    setGenreFollowee(Followee);
  };

  // ジャンルアカフォロワー数
  const [genreFollower, setGenreFollower] = useState<GenreFollower>(
    props.genreFollower || 0
  );

  const onChangeGenreFollower = (e: any) => {
    const Follower = Number(e.target.value);
    setGenreFollower(Follower);
  };

  // コメント
  const [genreComment, setGenreComment] = useState<GenreComment>(
    props.genreComment || ""
  );

  // Submitボタンクリック時に発火;
  const onClickSubmit = async () => {
    await genreClient.$post({
      body: {
        genreName: genreName,
        genreStyle: genreStyle,
        genreStartDate: genreStartDate,
        genreEndDate: genreEndDate,
        genreStartAge: genreStartAge,
        genreEndAge: genreEndAge,
        genreFollowee: genreFollowee,
        genreFollower: genreFollower,
        genreComment: genreComment,
      },
    });

    console.log(genreName);

    // ジャンル一覧ページに遷移
    router.push("/genres");
  };

  // Backボタンクリック時に発火
  const onClickBack = () => {
    router.push("/genres");
  };

  // Updateボタンクリック時に発火
  const onClickUpdate = async () => {
    const genreID = props.genreID;

    await genreClient._id(genreID!).$put({
      body: {
        genreName: genreName,
        genreStyle: genreStyle,
        genreStartDate: genreStartDate,
        genreEndDate: genreEndDate,
        genreStartAge: genreStartAge,
        genreEndAge: genreEndAge,
        genreFollowee: genreFollowee,
        genreFollower: genreFollower,
        genreComment: genreComment,
      },
      query: {
        genreID: Number(props.genreID),
      },
    });

    // ジャンル一覧ページに遷移
    router.push("/genres");
  };

  return (
    <>
      <FormControl>
        <FormLabel>Genre Name</FormLabel>
        <Input
          placeholder="Text Input"
          onChange={(e) => setGenreName(e.target.value)}
          value={genreName}
        />

        <FormLabel>Genre Style</FormLabel>
        <Select
          placeholder="Select Genre Style"
          value={genreStyle}
          onChange={onChangeGenreStyle}
        >
          {genreStyleOption.map((option) => {
            return (
              <option key={option.option} value={option.value}>
                {option.option}
              </option>
            );
          })}
        </Select>

        <FormLabel>Genre Start Date</FormLabel>
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="date"
          value={genreStartDate}
          onChange={(e) => setGenreStartDate(e.target.value)}
        />

        <FormLabel>Genre End Date</FormLabel>
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="date"
          value={genreEndDate}
          onChange={(e) => setGenreEndDate(e.target.value)}
        />

        <FormLabel>Genre Start Age</FormLabel>
        <NumberInput value={genreStartAge}>
          <NumberInputField onChange={onChangeGenreStartAge} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <FormLabel>Genre End Age</FormLabel>
        <NumberInput value={genreEndAge}>
          <NumberInputField onChange={onChangeGenreEndAge} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <FormLabel>Followee</FormLabel>
        <NumberInput value={genreFollowee}>
          <NumberInputField onChange={onChangeGenreFollowee} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <FormLabel>Follower</FormLabel>
        <NumberInput value={genreFollower}>
          <NumberInputField onChange={onChangeGenreFollower} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <FormLabel>Comment</FormLabel>
        <Textarea
          placeholder="Here is a sample placeholder"
          onChange={(e) => setGenreComment(e.target.value)}
          value={genreComment}
        />

        <ButtonGroup spacing={4}>
          {props.FormType === "Create" ? (
            <Button colorScheme="blue" onClick={onClickSubmit}>
              Submit
            </Button>
          ) : (
            ""
          )}
          {props.FormType === "Update" ? (
            <Button colorScheme="blue" onClick={onClickUpdate}>
              Update
            </Button>
          ) : (
            ""
          )}
          <Button colorScheme="blue" onClick={onClickBack}>
            Back
          </Button>
        </ButtonGroup>
      </FormControl>
    </>
  );
};

export default GenreForm;
