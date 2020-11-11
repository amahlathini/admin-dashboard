import React from 'react'
import { Create, SimpleForm, NumberInput, TextInput, ImageInput } from "react-admin";

const PharmacyCreate = (props) => {
    return (
        <Create title='Add Pharmacy' {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput body source="email_address"/>
            <NumberInput source="phone"/>
            <TextInput source="Address" />
            <NumberInput source="location.latitude"/>
            <NumberInput source="location.longitude"/>
            <ImageInput label='Profile Picture' source="image" />
        </SimpleForm>
        </Create>
    )
}

export default PharmacyCreate
