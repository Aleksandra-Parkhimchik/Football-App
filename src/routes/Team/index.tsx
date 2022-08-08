import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";

import { fetchSpecificTeam } from "../../api";
import MatchesTable from "../../components/MatchesTable";
import PlayersTable from "../../components/PlayersTable";
import TeamLogo from "../../components/TeamLogo";

import { useAsyncError } from "../../hooks";
import { ISpecificTeamDetails } from "../../interfaces";
import { Container } from "@mui/material";

export default function Team() {
  const [specificTeamDetails, setSpecificTeamDetails] =
    useState<ISpecificTeamDetails>();
  const { teamId } = useParams();
  const handleAsyncError = useAsyncError();

  useEffect(() => {
    if (!teamId) {
      return;
    }

    fetchSpecificTeam(teamId)
      .then((data) => {
        setSpecificTeamDetails(data);
      })
      .catch(handleAsyncError);
  }, [teamId]);

  if (!specificTeamDetails) {
    return null;
  }

  return (
    <Container>
      <Grid container sx={{ p: 2 }} rowSpacing={3} columnSpacing={3}>
        <Grid container xs={12} alignItems={"center"} justifyContent={"center"}>
          <TeamLogo specificTeamDetails={specificTeamDetails} />
        </Grid>
        <Grid item xs={12} md={6}>
          <PlayersTable specificTeamDetails={specificTeamDetails} />
        </Grid>
        <Grid item xs={12} md={6}>
          <MatchesTable />
        </Grid>
      </Grid>
    </Container>
  );
}
