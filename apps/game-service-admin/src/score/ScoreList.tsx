import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GAMEROUND_TITLE_FIELD } from "../gameRound/GameRoundTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";
import { SPECIALPLAYER_TITLE_FIELD } from "../specialPlayer/SpecialPlayerTitle";

export const ScoreList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Scores"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="GameRound"
          source="gameround.id"
          reference="GameRound"
        >
          <TextField source={GAMEROUND_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Player" source="player.id" reference="Player">
          <TextField source={PLAYER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="playerPoints" source="playerPoints" />
        <ReferenceField
          label="SpecialPlayer"
          source="specialplayer.id"
          reference="SpecialPlayer"
        >
          <TextField source={SPECIALPLAYER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="specialPlayerPoints" source="specialPlayerPoints" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
