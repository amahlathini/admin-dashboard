import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  EmailField,
  NumberField,
  DeleteButton
} from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
      <TextField source="user_name"/>
            <TextField source="user_surname"/>
            <EmailField body source="email"/>
            <TextField source="gender" label="Gender"/>
            <NumberField source="contact.primary_number" label="Primary #"/>
            <NumberField source="contact.secondary_number" label="Secondary #"/>
            <TextField source="address.street_name" label="Street Name"/>
            <TextField source="address.area_name" label="Area Name"/>
            <TextField source="medical_aid.medical_aid_name" label="Medical Aid Name"/>
            <TextField source="medical_aid.medical_aid_scheme" label="Medical Aid Scheme"/>
            <TextField source="medical_aid.user_medical_aid_number" label="Medical Aid Number"/>
            <NumberField source="address.area_code" label="Area Code"/>
        <EditButton basePath="users" />
        <DeleteButton basePath="users" />
      </Datagrid>
    </List>
  );
};

export default UserList;
