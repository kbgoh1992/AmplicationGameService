import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { GAMEROUND_TITLE_FIELD } from "../gameRound/GameRoundTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";
import { SPECIALPLAYER_TITLE_FIELD } from "../specialPlayer/SpecialPlayerTitle";

export const ScoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
