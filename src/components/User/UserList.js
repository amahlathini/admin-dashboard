import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ImageField,
  EmailField,
  NumberField,
  DeleteButton,
} from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="surname" />
        <EmailField body source="email_address" />
        <NumberField source="phone" />
        <TextField source="Address" />
        <ImageField label="Profile Picture" source="image" />
        <EditButton basePath="/profile" />
        <DeleteButton basePath="/profile" />
      </Datagrid>
    </List>
  );
};

export default UserList;
