import React from 'react'
import { Create, SimpleForm, DateInput, NumberInput, TextInput } from "react-admin";

const OrderCreate = (props) => {
    return (
        <Create title='Add Order' {...props}>
        <SimpleForm>
            <TextInput source="user_id"/>
            <TextInput source="total"/>
            <TextInput source="status"/>
            <NumberInput source="count" />
            <DateInput source="date"/>
            <TextInput label='Image URL' source="image" />
        </SimpleForm>
        </Create>
    )
}

export default OrderCreate
