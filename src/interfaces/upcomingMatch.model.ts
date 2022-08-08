export default interface IUpcomingMatch {
  id: number;
  homeTeam?: {
    id: number;
    name: string;
  };
  awayTeam?: {
    id: number;
    name: string;
  };
  utcDate?: string;
  competition?: {
    name: string;
  };
}
