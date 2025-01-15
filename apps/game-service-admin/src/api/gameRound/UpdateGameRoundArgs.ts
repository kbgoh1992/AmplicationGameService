import { GameRoundWhereUniqueInput } from "./GameRoundWhereUniqueInput";
import { GameRoundUpdateInput } from "./GameRoundUpdateInput";

export type UpdateGameRoundArgs = {
  where: GameRoundWhereUniqueInput;
  data: GameRoundUpdateInput;
};
