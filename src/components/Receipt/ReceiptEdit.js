import React from 'react'
import { Edit, SimpleForm,DateInput, NumberInput, TextInput } from "react-admin";

const ReceiptEdit = (props) => {
    return (
        <Edit title='Edit Receipt' {...props}>
        <SimpleForm>
        <TextInput source="id" label="Receipt #"/>
            <TextInput source="type_of_payment" label="Payment Type"/>
            <NumberInput source="payment_total" label="Total"/>
            <NumberInput source="quantity" label="Quantity"/>
            <DateInput source="date" label="Date"/>
        </SimpleForm>
        </Edit>
    )
}

export default ReceiptEdit
