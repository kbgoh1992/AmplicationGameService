import { GameRoundWhereUniqueInput } from "../gameRound/GameRoundWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { SpecialPlayerWhereUniqueInput } from "../specialPlayer/SpecialPlayerWhereUniqueInput";

export type ScoreUpdateInput = {
  gameRound?: GameRoundWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
  playerPoints?: number | null;
  specialPlayer?: SpecialPlayerWhereUniqueInput | null;
  specialPlayerPoints?: number | null;
};
