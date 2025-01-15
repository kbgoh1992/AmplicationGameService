import { ScoreUpdateManyWithoutPlayersInput } from "./ScoreUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  name?: string | null;
  points?: number | null;
  scores?: ScoreUpdateManyWithoutPlayersInput;
};
