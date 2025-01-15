import { SortOrder } from "../../util/SortOrder";

export type ScoreOrderByInput = {
  createdAt?: SortOrder;
  gameRoundId?: SortOrder;
  id?: SortOrder;
  playerId?: SortOrder;
  playerPoints?: SortOrder;
  specialPlayerId?: SortOrder;
  specialPlayerPoints?: SortOrder;
  updatedAt?: SortOrder;
};
