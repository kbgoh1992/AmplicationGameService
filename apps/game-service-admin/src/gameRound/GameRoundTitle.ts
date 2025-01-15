import { GameRound as TGameRound } from "../api/gameRound/GameRound";

export const GAMEROUND_TITLE_FIELD = "id";

export const GameRoundTitle = (record: TGameRound): string => {
  return record.id?.toString() || String(record.id);
};
