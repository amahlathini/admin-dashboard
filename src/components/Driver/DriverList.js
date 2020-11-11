import React from "react";
import {
  Datagrid,
  TextField,
  EmailField,
  NumberField,
  EditButton,
  List,
  DeleteButton,
} from "react-admin";

const DriverList = (props) => {
  return (
    <List  {...props}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="surname" />
        <EmailField body source="email_address" />
        <NumberField source="phone" />
        <TextField source="Address" />
        <NumberField source="location.latitude" />
        <NumberField source="location.longitude" />
        <TextField label="Profile Picture" source="image" />
        <EditButton basePath="/drivers" />
        <DeleteButton basePath="/drivers" />
      </Datagrid>
    </List >
  );
};

export default DriverList;
