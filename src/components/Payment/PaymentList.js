import React from 'react'
import { Datagrid, TextField, List, EditButton, NumberField,DateField, DeleteButton } from "react-admin";

const PaymentList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
            <TextField disable source="id" />
        <TextField source="type_of_payment" />
        <TextField source="pharmacy_id" />
        <TextField source="user_id" />
        <NumberField disable source="payment_status" />
        <NumberField disable source="payment_total" />
        <DateField source="date" />
                <EditButton basePath='/payments'/>
                <DeleteButton basePath='/payments'/>
            </Datagrid>
        </List>
    )
}

export default PaymentList;
