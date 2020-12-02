import React from 'react'
import { Create, SimpleForm, NumberInput, TextInput } from "react-admin";

const DriverCreate = (props) => {
    return (
        <Create title='Add Driver' {...props}>
        <SimpleForm>
        <TextInput source="driver_name" label='Name'/>
            <TextInput source="driver_surname" label='Surname'/>
            <TextInput body source="car.car_colour" label='Colour'/>
            <TextInput source="car.car_registration" label='Registration #'/>
            <TextInput label='Car Name' source="car.car_name" />
            <TextInput label='Model' source="car.car_model" />
            <NumberInput source="driver_location.latitude" label='Latitude'/>
            <NumberInput source="driver_location.longitude" label='Longitude'/>
        </SimpleForm>
        </Create>
    )
}

export default DriverCreate
