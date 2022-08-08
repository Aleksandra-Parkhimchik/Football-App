import axios, { AxiosError } from "axios";

import { TEAMS_ENDPOINT, UPCOMING_MATCHES_LIMIT } from "../constants";

export default async function (id: string) {
  const response = await axios.get(`${TEAMS_ENDPOINT}${id}/matches`, {
    params: {
      limit: UPCOMING_MATCHES_LIMIT,
    },
    headers: {
      "X-Auth-Token": process.env["REACT_APP_API_TOKEN"] as string,
    },
  });

  const { status, data } = response;

  if (status === 200) {
    return data;
  }

  throw new AxiosError();
}
