import React from 'react'
import { Create, SimpleForm, NumberInput, TextInput } from "react-admin";

const DriverCreate = (props) => {
    return (
        <Create title='Add Driver' {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="surname"/>
            <TextInput body source="email_address"/>
            <NumberInput source="phone"/>
            <TextInput source="Address" />
            <NumberInput source="location.latitude"/>
            <NumberInput source="location.longitude"/>
            <TextInput label='Image URL' source="image" />
        </SimpleForm>
        </Create>
    )
}

export default DriverCreate
