import { ScoreCreateNestedManyWithoutGameRoundsInput } from "./ScoreCreateNestedManyWithoutGameRoundsInput";

export type GameRoundCreateInput = {
  date?: Date | null;
  roundNumber?: number | null;
  scores?: ScoreCreateNestedManyWithoutGameRoundsInput;
};
