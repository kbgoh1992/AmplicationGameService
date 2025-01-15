import { GameRoundWhereInput } from "./GameRoundWhereInput";
import { GameRoundOrderByInput } from "./GameRoundOrderByInput";

export type GameRoundFindManyArgs = {
  where?: GameRoundWhereInput;
  orderBy?: Array<GameRoundOrderByInput>;
  skip?: number;
  take?: number;
};
