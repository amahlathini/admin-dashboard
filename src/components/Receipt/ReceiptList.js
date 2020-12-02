import React from "react";
import {
  Datagrid,
  TextField,
  NumberField,
  DateField,
  EditButton,
  DeleteButton,
  List
} from "react-admin";

const ReceiptList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
      <TextField source="id" label="Receipt #"/>
            <TextField source="type_of_payment" label="Payment Type"/>
            <NumberField source="payment_total" label="Total"/>
            <NumberField source="quantity" label="Quantity"/>
            <TextField source="user_id" label="User"/>
            <DateField source="date" label="Date"/>
        <EditButton basePath="/receipts" />
        <DeleteButton basePath="/receipts" />
      </Datagrid>
    </List>
  );
};

export default ReceiptList;
