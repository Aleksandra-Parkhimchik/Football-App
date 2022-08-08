export default interface ISpecificTeamDetails {
  id: number;
  name: string;
  crest: string;
  squad: {
    id: number;
    name: string;
  }[];
}
