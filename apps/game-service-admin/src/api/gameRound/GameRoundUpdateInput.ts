import { ScoreUpdateManyWithoutGameRoundsInput } from "./ScoreUpdateManyWithoutGameRoundsInput";

export type GameRoundUpdateInput = {
  date?: Date | null;
  roundNumber?: number | null;
  scores?: ScoreUpdateManyWithoutGameRoundsInput;
};
