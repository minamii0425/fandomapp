import aspida from "@aspida/axios";
import axios from "axios";
import https from "https";
import genreApi from "../api/genres/$api";
import couplingApi from "../api/couplings/$api";
import fanficApi from "../api/fanfics/$api";
import fanbookApi from "../api/fanbooks/$api";

// 環境に応じてaxios.defaults.baseURLを変更する必要あり

let baseURL;
// dev環境はこっち
// axios.defaults.baseURL = process.env.BASE_URL + "/api";
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3010/api";
} else if (process.env.NODE_ENV === "production") {
  baseURL = "http://localhost:3010/api";
}

if (process.env.NEXT_PUBLIC_NODE_ENV === "vercel_production") {
  // Production環境はこうしないとだめそう
  baseURL = process.env.NEXT_PUBLIC_BASE_URL + "/api";
}

export const genreClient = genreApi(
  aspida(
    axios.create({
      responseType: "json",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
      baseURL: baseURL,
    })
  )
);

export const couplingClient = couplingApi(
  aspida(
    axios.create({
      responseType: "json",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    })
  )
);

export const fanficClient = fanficApi(
  aspida(
    axios.create({
      responseType: "json",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    })
  )
);

export const fanbookClient = fanbookApi(
  aspida(
    axios.create({
      responseType: "json",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    })
  )
);
