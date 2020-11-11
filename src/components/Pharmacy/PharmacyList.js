import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  NumberField,
  DeleteButton,
  ImageField,
  EmailField,
} from "react-admin";

const PharmacyList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="surname" />
        <EmailField body source="email_address" />
        <NumberField source="phone" />
        <TextField source="Address" />
        <ImageField label="Profile Picture" source="image" />
        <EditButton basePath="/pharmacies" />
        <DeleteButton basePath="/pharmacies" />
      </Datagrid>
    </List>
  );
};

export default PharmacyList;
