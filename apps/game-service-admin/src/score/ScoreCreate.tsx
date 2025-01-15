import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { GameRoundTitle } from "../gameRound/GameRoundTitle";
import { PlayerTitle } from "../player/PlayerTitle";
import { SpecialPlayerTitle } from "../specialPlayer/SpecialPlayerTitle";

export const ScoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="gameRound.id"
          reference="GameRound"
          label="GameRound"
        >
          <SelectInput optionText={GameRoundTitle} />
        </ReferenceInput>
        <ReferenceInput source="player.id" reference="Player" label="Player">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
        <NumberInput label="playerPoints" source="playerPoints" />
        <ReferenceInput
          source="specialPlayer.id"
          reference="SpecialPlayer"
          label="SpecialPlayer"
        >
          <SelectInput optionText={SpecialPlayerTitle} />
        </ReferenceInput>
        <NumberInput label="specialPlayerPoints" source="specialPlayerPoints" />
      </SimpleForm>
    </Create>
  );
};
