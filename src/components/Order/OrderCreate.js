import React from 'react'
import { Create, SimpleForm, DateInput, NumberInput, TextInput } from "react-admin";

const OrderCreate = (props) => {
    return (
        <Create title='Add Order' {...props}>
        <SimpleForm>
        <TextInput source="id" label="Order #"/>
            <TextInput source="payment_type" label="Payment Type"/>
            <NumberInput source="order_total" label="Total"/>
            <TextInput source="order_status" label="Status"/>
            <NumberInput source="total_catalogue_items" label="Quantity"/>
            <DateInput source="date" label="Date"/>
        </SimpleForm>
        </Create>
    )
}

export default OrderCreate
