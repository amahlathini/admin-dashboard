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
      <TextField source="user_id" label="USER"/>
        <TextField source="id" label="Order #"/>
            <TextField source="payment_type" label="Payment Type"/>
            <NumberField source="order_total" label="Total"/>
            <TextField source="order_status" label="Status"/>
            <NumberField source="total_catalogue_items" label="Quantity"/>
            <DateField source="date" label="Date"/>
        <EditButton basePath="/orders" />
        <DeleteButton basePath="/orders" />
      </Datagrid>
    </List>
  );
};

export default OrderList;
