import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ScoreTitle } from "../score/ScoreTitle";

export const GameRoundEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="roundNumber" source="roundNumber" />
        <ReferenceArrayInput source="scores" reference="Score">
          <SelectArrayInput
            optionText={ScoreTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
