import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";

export type PlayerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  points?: FloatNullableFilter;
  scores?: ScoreListRelationFilter;
};
