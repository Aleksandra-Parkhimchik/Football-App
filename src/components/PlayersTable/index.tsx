import React from "react";

import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";

import { StyledTableRow, StyledTableCell } from "../StyledTableComponents";
import { ISpecificTeamDetails } from "../../interfaces";

export default ({
  specificTeamDetails,
}: {
  specificTeamDetails: ISpecificTeamDetails;
}) => (
  <TableContainer>
    <Table aria-label="customized table">
      <TableHead>
        <StyledTableRow>
          <StyledTableCell>
            <h2>Players</h2>
          </StyledTableCell>
        </StyledTableRow>
      </TableHead>
      <TableBody>
        {specificTeamDetails.squad?.length > 0 &&
          specificTeamDetails.squad.map((player) => (
            <StyledTableRow
              key={player.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell>{player.name}</StyledTableCell>
            </StyledTableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
);
