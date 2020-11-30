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
      <TextField source="order_number"/>
            <TextField source="payment_type"/>
            <NumberField source="order_total" />
            <TextField source="order_status"/>
            <NumberField source="total_catalogue_items"/>
            <DateField source="date"/>
        <EditButton basePath="/orders" />
        <DeleteButton basePath="/orders" />
      </Datagrid>
    </List>
  );
};

export default OrderList;
