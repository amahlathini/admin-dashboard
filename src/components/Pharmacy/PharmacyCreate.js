import React from 'react'
import { Create, SimpleForm, NumberInput, TextInput } from "react-admin";

const PharmacyCreate = (props) => {
    return (
        <Create title='Add Pharmacy' {...props}>
        <SimpleForm>
        <TextInput source="pharmacy_name"/>
            <NumberInput source="bank_account.account_number" label="Account Number"/>
            <TextInput source="bank_account.bank_name" label="Bank Name" />
            <NumberInput source="bank_account.beneficiary_reference" label="Beneficiary Reference"/>
            <NumberInput source="bank_account.branch_code" label="Branch Code"/>
        </SimpleForm>
        </Create>
    )
}

export default PharmacyCreate
