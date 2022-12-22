import aspida from "@aspida/axios";
import axios from "axios";
import https from "https";
import genreApi from "../api/genres/$api";
import couplingApi from "../api/couplings/$api";
import fanficApi from "../api/fanfics/$api";
import fanbookApi from "../api/fanbooks/$api";

// axios.defaults.baseURL = process.env.BASE_URL + "/api";
axios.defaults.baseURL = "/api";

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
