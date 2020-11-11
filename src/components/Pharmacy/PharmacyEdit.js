import React from 'react'
import { Edit, SimpleForm, NumberInput, TextInput, ImageInput } from "react-admin";

const PharmacyEdit = (props) => {
    return (
        <Edit title='Edit Pharmacy' {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput body source="email_address"/>
            <NumberInput source="phone"/>
            <TextInput source="Address" />
            <NumberInput source="location.latitude"/>
            <NumberInput source="location.longitude"/>
            <ImageInput label='Profile Picture' source="image" />
        </SimpleForm>
        </Edit>
    )
}

export default PharmacyEdit
