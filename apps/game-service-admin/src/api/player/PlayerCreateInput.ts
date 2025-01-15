import { ScoreCreateNestedManyWithoutPlayersInput } from "./ScoreCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  name?: string | null;
  points?: number | null;
  scores?: ScoreCreateNestedManyWithoutPlayersInput;
};
