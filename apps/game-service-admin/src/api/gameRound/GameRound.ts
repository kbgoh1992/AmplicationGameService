import { Score } from "../score/Score";

export type GameRound = {
  createdAt: Date;
  date: Date | null;
  id: string;
  roundNumber: number | null;
  scores?: Array<Score>;
  updatedAt: Date;
};
