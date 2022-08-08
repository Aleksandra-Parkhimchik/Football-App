import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";

import { StyledTableRow, StyledTableCell } from "../StyledTableComponents";
import { fetchUpcomingMatches } from "../../api";
import { useAsyncError } from "../../hooks";
import { IUpcomingMatch } from "../../interfaces";
import { getRivalTeamName, formatUpcomingMatchDate } from "../../utils";

export default () => {
  const [upcomingMatches, setUpcomingMatches] = useState<IUpcomingMatch[]>([]);
  const { teamId } = useParams();
  const handleAsyncError = useAsyncError();

  useEffect(() => {
    if (!teamId) {
      return;
    }

    fetchUpcomingMatches(teamId)
      .then((data) => setUpcomingMatches(data?.matches))
      .catch(handleAsyncError);
  }, [teamId]);

  if (!teamId) {
    return null;
  }

  return (
    <TableContainer>
      <Table aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>
              <h2>Rival&nbsp;team</h2>
            </StyledTableCell>
            <StyledTableCell>
              <h2>Date</h2>
            </StyledTableCell>
            <StyledTableCell>
              <h2>Competition</h2>
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {upcomingMatches.length > 0 &&
            upcomingMatches.map((upcomingMatch) => (
              <StyledTableRow
                key={upcomingMatch.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell>
                  {getRivalTeamName(parseInt(teamId), upcomingMatch)}
                </StyledTableCell>
                <StyledTableCell>
                  {formatUpcomingMatchDate(upcomingMatch)}
                </StyledTableCell>
                <StyledTableCell>
                  {upcomingMatch.competition?.name}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
