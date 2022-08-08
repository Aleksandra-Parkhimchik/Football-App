import { IUpcomingMatch } from "../interfaces";

export default (teamId: number, match: IUpcomingMatch): string | undefined => {
  const { homeTeam, awayTeam } = match;

  if (teamId === homeTeam?.id) {
    return awayTeam?.name;
  }

  return homeTeam?.name;
};
