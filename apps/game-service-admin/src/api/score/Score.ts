import { GameRound } from "../gameRound/GameRound";
import { Player } from "../player/Player";
import { SpecialPlayer } from "../specialPlayer/SpecialPlayer";

export type Score = {
  createdAt: Date;
  gameRound?: GameRound | null;
  id: string;
  player?: Player | null;
  playerPoints: number | null;
  specialPlayer?: SpecialPlayer | null;
  specialPlayerPoints: number | null;
  updatedAt: Date;
};
