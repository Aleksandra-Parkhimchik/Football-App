import moment from "moment";

import { IUpcomingMatch } from "../interfaces";

export default (upcomingMatch: IUpcomingMatch): string => {
  if (!upcomingMatch.utcDate) {
    return "";
  }

  return moment.utc(upcomingMatch.utcDate).format("LL");
};
