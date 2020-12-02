import React from 'react'
import { Create, SimpleForm, DateInput, NumberInput, TextInput } from "react-admin";

const ReceiptCreate = (props) => {
    return (
        <Create title='Add Receipt' {...props}>
        <SimpleForm>
        <TextInput source="id" disable label="Receipt #"/>
            <TextInput source="type_of_payment" label="Payment Type"/>
            <NumberInput source="payment_total" label="Total"/>
            <NumberInput source="quantity" label="Quantity"/>
            <DateInput source="date" label="Date"/>
        </SimpleForm>
        </Create>
    )
}

export default ReceiptCreate
