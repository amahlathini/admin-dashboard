import React from 'react'
import { Datagrid, TextField, List, EditButton, NumberField,DateField, DeleteButton } from "react-admin";

const PaymentList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id"/>
                <TextField label="Order" source="order_id"/>
                <TextField source="status"/>
                <TextField source="type"/>
                <TextField source="notification"/>
                <NumberField source="total"/>
                <DateField source="date"/>
                <EditButton basePath='/payments'/>
                <DeleteButton basePath='/payments'/>
            </Datagrid>
        </List>
    )
}

export default PaymentList;
