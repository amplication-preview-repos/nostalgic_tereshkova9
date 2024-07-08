import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MessageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Messages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="body" source="body" />
        <TextField label="gift" source="gift" />
        <TextField label="media" source="media" />
        <TextField label="key" source="key" />
        <TextField label="ownerUid" source="ownerUid" />
        <TextField label="type" source="typeField" />
      </Datagrid>
    </List>
  );
};
