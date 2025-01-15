import { ScoreCreateNestedManyWithoutSpecialPlayersInput } from "./ScoreCreateNestedManyWithoutSpecialPlayersInput";

export type SpecialPlayerCreateInput = {
  name?: string | null;
  points?: number | null;
  scores?: ScoreCreateNestedManyWithoutSpecialPlayersInput;
};
