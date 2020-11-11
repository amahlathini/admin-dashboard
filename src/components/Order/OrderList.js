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

const OrderList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="user_id" />
        <TextField source="total" />
        <TextField source="status" />
        <NumberField source="count" />
        <DateField source="date" />
        <EditButton basePath="/orders" />
        <DeleteButton basePath="/orders" />
      </Datagrid>
    </List>
  );
};

export default OrderList;
