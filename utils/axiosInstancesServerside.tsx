import aspida from "@aspida/axios";
import axios from "axios";
import https from "https";
import genreApi from "../api/genres/$api";
import couplingApi from "../api/couplings/$api";
import fanficApi from "../api/fanfics/$api";
import fanbookApi from "../api/fanbooks/$api";

// 環境に応じてaxios.defaults.baseURLを変更する必要あり

// dev環境はこっち
// axios.defaults.baseURL = process.env.BASE_URL + "/api";

// Production環境はこうしないとだめそう
// axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL + "/api";
axios.defaults.baseURL = "https://fandomapp-minamii0425.vercel.app/api/";

export const genreClient = genreApi(
  aspida(
    axios.create({
      responseType: "json",
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
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
