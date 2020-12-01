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
            <NumberField source="bank_account.account_number" label="Account Number"/>
            <TextField source="bank_account.bank_name" label="Bank Name" />
            <NumberField source="bank_account.beneficiary_reference" label="Beneficiary Reference"/>
            <NumberField source="bank_account.branch_code" label="Branch Code"/>
        <EditButton basePath="/pharmacies" />
        <DeleteButton basePath="/pharmacies" />
      </Datagrid>
    </List>
  );
};

export default PharmacyList;
