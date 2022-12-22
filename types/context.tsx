import { NextApiRequest, NextApiResponse } from "next";
import { ParsedUrlQuery } from "querystring";

export type Context<T> = {
  body: T;
  genreID: number;
  resolvedUrl: T;
};

export type Args = {
  req: NextApiRequest;
  res: NextApiResponse;
  query: ParsedUrlQuery;
};
