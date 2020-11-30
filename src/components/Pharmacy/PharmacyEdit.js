import React from 'react'
import { Edit, SimpleForm, NumberInput, TextInput } from "react-admin";

const PharmacyEdit = (props) => {
    return (
        <Edit title='Edit Pharmacy' {...props}>
        <SimpleForm>
        <TextInput source="pharmacy_name"/>
            <TextInput  source="pharmacy_id"/>
            <NumberInput source="account_number"/>
            <TextInput source="bank_name" />
            <NumberInput source="beneficiary_reference"/>
            <NumberInput source="branch_code"/>
        </SimpleForm>
        </Edit>
    )
}

export default PharmacyEdit
