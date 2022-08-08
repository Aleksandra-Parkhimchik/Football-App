import React from "react";
import { AxiosError } from "axios";

import getErrorMessage from "./getErrorMessage";
import { Container } from "@mui/material";

export default ({ error }: { error: AxiosError }) => (
  <Container>
    <h1>Oops...</h1>
    <h2>{getErrorMessage(error)}</h2>
  </Container>
);
