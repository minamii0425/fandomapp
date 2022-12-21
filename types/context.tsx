import { NextApiRequest, NextApiResponse } from "next";
import { ParsedUrlQuery } from "querystring";

export type Context<T> = {
  body: T;
  genreID: number;
};

export type Args = {
  req: NextApiRequest;
  res: NextApiResponse;
  query: ParsedUrlQuery;
};
