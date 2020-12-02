import React from 'react'
import { Create, SimpleForm, NumberInput, TextInput, PasswordInput } from "react-admin";

const ProductCreate = (props) => {
    return (
        <Create title='Add Product' {...props}>
        <SimpleForm>
            
        <TextInput source="user_name" label="Name"/>
            <TextInput source="user_surname" label="Surname"/>
            <TextInput body source="email"/>
            <TextInput source="gender" label="Gender"/>
            <NumberInput source="contact.primary_number" label="Primary #"/>
            <NumberInput source="contact.secondary_number" label="Secondary #"/>
            <TextInput source="address.street_name" label="Street"/>
            <TextInput source="address.area_name" label="Area"/>
            <TextInput source="medical_aid.medical_aid_name" label="Medical Aid Name"/>
            <TextInput source="medical_aid.medical_aid_scheme" label="Medical Aid Scheme"/>
            <TextInput source="medical_aid.user_medical_aid_number" label="Medical Aid #"/>
            <NumberInput source="address.area_code" label="Area Code"/>
        </SimpleForm>
        </Create>
    )
}

export default ProductCreate
