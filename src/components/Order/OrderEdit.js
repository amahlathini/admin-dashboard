import React from 'react'
import { Edit, SimpleForm,DateInput, NumberInput, TextInput } from "react-admin";

const OrderEdit = (props) => {
    return (
        <Edit title='Edit Order' {...props}>
        <SimpleForm>
            <TextInput source="user_id"/>
            <TextInput source="total"/>
            <TextInput source="status"/>
            <NumberInput source="count" />
            <DateInput source="date"/>
        </SimpleForm>
        </Edit>
    )
}

export default OrderEdit
