import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  EmailField,
  NumberField,
  DeleteButton,
} from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
      <TextField source="user_name"/>
            <TextField source="user_surname"/>
            <EmailField body source="email"/>
            <NumberField source="primary_number"/>
            <TextField source="area_name" />
        <EditButton basePath="users" />
        <DeleteButton basePath="users" />
      </Datagrid>
    </List>
  );
};

export default UserList;
