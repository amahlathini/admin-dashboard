import React from 'react'
import { Edit, SimpleForm,DateInput, NumberInput, TextInput } from "react-admin";

const OrderEdit = (props) => {
    return (
        <Edit title='Edit Order' {...props}>
        <SimpleForm>
        <TextInput source="user_id" label="USER"/>
        <TextInput disable source="id" label="Order #"/>
            <TextInput source="payment_type" label="Payment Type"/>
            <NumberInput source="order_total" label="Total"/>
            <TextInput source="order_status" label="Status"/>
            <NumberInput source="total_catalogue_items" label="Quantity"/>
            <DateInput source="date" label="Date"/>
        </SimpleForm>
        </Edit>
    )
}

export default OrderEdit
