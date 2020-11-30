import React from 'react'
import { Edit, SimpleForm,DateInput, NumberInput, TextInput } from "react-admin";

const OrderEdit = (props) => {
    return (
        <Edit title='Edit Order' {...props}>
        <SimpleForm>
        <TextInput source="user_user_id"/>
            <TextInput source="order_number"/>
            <TextInput source="payment_type"/>
            <NumberInput source="order_total" />
            <TextInput source="order_status"/>
            <NumberInput source="total_catalogue_items"/>
            <DateInput source="date"/>
        </SimpleForm>
        </Edit>
    )
}

export default OrderEdit
