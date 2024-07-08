import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="body" source="body" />
        <TextInput label="gift" source="gift" />
        <div />
        <TextInput label="key" source="key" />
        <NumberInput step={1} label="ownerUid" source="ownerUid" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
