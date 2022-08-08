import React from "react";

import { Container } from "@mui/material";

import { ISpecificTeamDetails } from "../../interfaces";

import "./index.css";

export default ({
  specificTeamDetails,
}: {
  specificTeamDetails: ISpecificTeamDetails;
}) => (
  <Container>
    <h1>{specificTeamDetails.name}</h1>
    <img
      className="Team-logo"
      alt={specificTeamDetails.name}
      src={specificTeamDetails.crest}
      loading="lazy"
    />
  </Container>
);
