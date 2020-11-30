import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  NumberField,
  DeleteButton
} from "react-admin";

const PharmacyList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
      <TextField source="pharmacy_name"/>
            <TextField  source="pharmacy_id"/>
            <NumberField source="account_number"/>
            <TextField source="bank_name" />
            <NumberField source="beneficiary_reference"/>
            <NumberField source="branch_code"/>
        <EditButton basePath="/pharmacies" />
        <DeleteButton basePath="/pharmacies" />
      </Datagrid>
    </List>
  );
};

export default PharmacyList;
