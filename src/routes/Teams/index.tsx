import React, { useState } from "react";
import { Link } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import InfiniteScroll from "react-infinite-scroller";

import { fetchTeams } from "../../api";
import { useAsyncError } from "../../hooks";
import { ITeamListParams, ISpecificTeamDetails } from "../../interfaces";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../components/StyledTableComponents";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { Container } from "@mui/material";

export default function Teams() {
  const [teamsList, setTeamsList] = useState<ISpecificTeamDetails[]>([]);
  const [params, setParams] = useState<ITeamListParams>({
    limit: 100,
    offset: 0,
  });
  const [hasMore, setHasMore] = useState<boolean>(true);

  const handleAsyncError = useAsyncError();

  const onLoadMore = () => {
    fetchTeams({ params })
      .then((data) => {
        if (data?.teams.length === 0) {
          setHasMore(false);
        }
        setTeamsList([...teamsList, ...data?.teams]);
        setParams((params) => ({
          limit: params.limit,
          offset: params.offset + params.limit,
        }));
      })
      .catch(handleAsyncError);
  };

  return (
    <Container>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={hasMore}
        loader={<CircularProgress key={0} />}
      >
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>
                  <h2>Teams</h2>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {teamsList.length > 0 &&
                teamsList.map((team) => (
                  <StyledTableRow>
                    <StyledTableCell key={team.id}>
                      <Link to={`${team.id}`}>{team.name}</Link>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </InfiniteScroll>
    </Container>
  );
}
