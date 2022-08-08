import React from "react";
import { AxiosError } from "axios";

export default (error: AxiosError) => {
  switch (error.response?.status) {
    case 403:
      return (
        <>
          The resource you are looking for is restricted because this
          application uses a free key to access to{" "}
          <a
            href="https://www.football-data.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.football-data.org/
          </a>
          . Please choose another team.
        </>
      );
    case 429:
      return (
        <>
          This application uses a free key to access to{" "}
          <a
            href="https://www.football-data.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.football-data.org/
          </a>{" "}
          which is rate limited. Please refresh page in couple of minutes.
        </>
      );
    default:
      return <>An unknown error occurred</>;
  }
};
