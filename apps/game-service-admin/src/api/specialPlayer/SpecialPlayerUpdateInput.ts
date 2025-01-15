import { ScoreUpdateManyWithoutSpecialPlayersInput } from "./ScoreUpdateManyWithoutSpecialPlayersInput";

export type SpecialPlayerUpdateInput = {
  name?: string | null;
  points?: number | null;
  scores?: ScoreUpdateManyWithoutSpecialPlayersInput;
};
