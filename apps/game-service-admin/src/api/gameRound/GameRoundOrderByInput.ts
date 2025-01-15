import { SortOrder } from "../../util/SortOrder";

export type GameRoundOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  roundNumber?: SortOrder;
  updatedAt?: SortOrder;
};
