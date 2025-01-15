import { SpecialPlayerWhereInput } from "./SpecialPlayerWhereInput";
import { SpecialPlayerOrderByInput } from "./SpecialPlayerOrderByInput";

export type SpecialPlayerFindManyArgs = {
  where?: SpecialPlayerWhereInput;
  orderBy?: Array<SpecialPlayerOrderByInput>;
  skip?: number;
  take?: number;
};
