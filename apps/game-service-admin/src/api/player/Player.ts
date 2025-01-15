import { Score } from "../score/Score";

export type Player = {
  createdAt: Date;
  id: string;
  name: string | null;
  points: number | null;
  scores?: Array<Score>;
  updatedAt: Date;
};
