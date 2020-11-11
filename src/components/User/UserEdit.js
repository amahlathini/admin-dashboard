import React from 'react'
import { Edit, SimpleForm, ImageInput, NumberInput, TextInput } from "react-admin";

const ProductEdit = (props) => {
    return (
        <Edit title='Edit Product' {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="surname"/>
            <TextInput body source="email_address"/>
            <NumberInput source="phone"/>
            <TextInput source="Address" />
            <ImageInput label='Profile Picture' source="image" />
        </SimpleForm>
        </Edit>
    )
}

export default ProductEdit
