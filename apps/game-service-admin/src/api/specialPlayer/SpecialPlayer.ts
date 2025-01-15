import { Score } from "../score/Score";

export type SpecialPlayer = {
  createdAt: Date;
  id: string;
  name: string | null;
  points: number | null;
  scores?: Array<Score>;
  updatedAt: Date;
};
