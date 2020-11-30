import React from 'react'
import { Edit, SimpleForm, NumberInput, TextInput } from "react-admin";

const ProductEdit = (props) => {
    return (
        <Edit title='Edit Product' {...props}>
        <SimpleForm>
        <TextInput source="user_name"/>
            <TextInput source="user_surname"/>
            <TextInput body source="email"/>
            <NumberInput source="primary_number"/>
            <TextInput source="area_name" />
        </SimpleForm>
        </Edit>
    )
}

export default ProductEdit
