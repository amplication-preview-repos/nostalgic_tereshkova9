import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="body" source="body" />
        <TextField label="gift" source="gift" />
        <TextField label="media" source="media" />
        <TextField label="key" source="key" />
        <TextField label="ownerUid" source="ownerUid" />
        <TextField label="type" source="typeField" />
      </SimpleShowLayout>
    </Show>
  );
};
