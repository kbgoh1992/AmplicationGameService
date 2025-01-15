import { GameRoundWhereUniqueInput } from "../gameRound/GameRoundWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SpecialPlayerWhereUniqueInput } from "../specialPlayer/SpecialPlayerWhereUniqueInput";

export type ScoreWhereInput = {
  gameRound?: GameRoundWhereUniqueInput;
  id?: StringFilter;
  player?: PlayerWhereUniqueInput;
  playerPoints?: FloatNullableFilter;
  specialPlayer?: SpecialPlayerWhereUniqueInput;
  specialPlayerPoints?: FloatNullableFilter;
};
