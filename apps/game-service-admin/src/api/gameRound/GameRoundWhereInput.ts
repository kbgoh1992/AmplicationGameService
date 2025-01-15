import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";

export type GameRoundWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  roundNumber?: IntNullableFilter;
  scores?: ScoreListRelationFilter;
};
