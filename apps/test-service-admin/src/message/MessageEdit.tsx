import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="body" source="body" />
        <TextInput label="gift" source="gift" />
        <div />
        <TextInput label="key" source="key" />
        <NumberInput step={1} label="ownerUid" source="ownerUid" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
