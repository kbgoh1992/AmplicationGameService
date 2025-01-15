import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GAMEROUND_TITLE_FIELD } from "./GameRoundTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";
import { SPECIALPLAYER_TITLE_FIELD } from "../specialPlayer/SpecialPlayerTitle";

export const GameRoundShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="roundNumber" source="roundNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Score"
          target="gameRoundId"
          label="Scores"
        >
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
            <ReferenceField
              label="Player"
              source="player.id"
              reference="Player"
            >
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
            <TextField
              label="specialPlayerPoints"
              source="specialPlayerPoints"
            />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
