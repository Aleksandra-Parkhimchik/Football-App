import axios, { AxiosError } from "axios";

import { TEAMS_ENDPOINT } from "../constants";
import { ITeamListParams } from "../interfaces";

export default async function ({ params }: { params: ITeamListParams }) {
  const response = await axios.get(TEAMS_ENDPOINT, {
    params,
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
