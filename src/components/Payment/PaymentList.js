import React from 'react'
import { Datagrid, TextField, List, EditButton, NumberField,DateField, DeleteButton } from "react-admin";

const PaymentList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
            <TextField disable source="receipt_number" />
        <TextField source="date" />
        <TextField source="type_of_payment" />
        <TextField source="pharmacy_pharmacy_id" />
        <TextField source="user_user_id" />
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
