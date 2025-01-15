import { SpecialPlayer as TSpecialPlayer } from "../api/specialPlayer/SpecialPlayer";

export const SPECIALPLAYER_TITLE_FIELD = "name";

export const SpecialPlayerTitle = (record: TSpecialPlayer): string => {
  return record.name?.toString() || String(record.id);
};
