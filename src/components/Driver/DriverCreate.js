import React from 'react'
import { Create, SimpleForm, NumberInput, TextInput } from "react-admin";

const DriverCreate = (props) => {
    return (
        <Create title='Add Driver' {...props}>
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
        </Create>
    )
}

export default DriverCreate
