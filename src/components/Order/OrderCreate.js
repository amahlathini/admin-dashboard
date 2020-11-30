import React from 'react'
import { Create, SimpleForm, DateInput, NumberInput, TextInput } from "react-admin";

const OrderCreate = (props) => {
    return (
        <Create title='Add Order' {...props}>
        <SimpleForm>
        <TextInput source="order_number"/>
            <TextInput source="payment_type"/>
            <NumberInput source="order_total" />
            <TextInput source="order_status"/>
            <NumberInput source="total_catalogue_items"/>
            <DateInput source="date"/>
        </SimpleForm>
        </Create>
    )
}

export default OrderCreate
