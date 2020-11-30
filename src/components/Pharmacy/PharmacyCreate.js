import React from 'react'
import { Create, SimpleForm, NumberInput, TextInput } from "react-admin";

const PharmacyCreate = (props) => {
    return (
        <Create title='Add Pharmacy' {...props}>
        <SimpleForm>
            <TextInput source="pharmacy_name"/>
            <TextInput  source="pharmacy_id"/>
            <NumberInput source="account_number"/>
            <TextInput source="bank_name" />
            <NumberInput source="beneficiary_reference"/>
            <NumberInput source="branch_code"/>
        </SimpleForm>
        </Create>
    )
}

export default PharmacyCreate
