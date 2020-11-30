import React from 'react'
import { Edit, SimpleForm, NumberInput, TextInput } from "react-admin";

const DriverEdit = (props) => {
    return (
        <Edit title='Edit Driver' {...props}>
        <SimpleForm>
        <TextInput source="driver_name"/>
            <TextInput source="driver_surname"/>
            <TextInput body source="car_colour"/>
            <TextInput source="car_registration" />
            <TextInput label='Car Name' source="car_name" />
            <TextInput label='Model' source="car_model" />
            <NumberInput source="latitude"/>
            <NumberInput source="longitude"/>
        </SimpleForm>
        </Edit>
    )
}

export default DriverEdit
