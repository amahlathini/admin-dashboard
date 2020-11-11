import React from 'react'
import { Edit, SimpleForm, NumberInput, TextInput } from "react-admin";

const DriverEdit = (props) => {
    return (
        <Edit title='Edit Driver' {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="surname"/>
            <TextInput body source="email_address"/>
            <NumberInput source="phone"/>
            <TextInput source="Address" />
            <NumberInput source="location.latitude"/>
            <NumberInput source="location.longitude"/>
            <TextInput label='Profile Picture' source="image" />
        </SimpleForm>
        </Edit>
    )
}

export default DriverEdit
