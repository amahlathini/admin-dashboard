import React from 'react'
import { Create, SimpleForm, NumberInput, TextInput } from "react-admin";

const ProductCreate = (props) => {
    return (
        <Create title='Add Product' {...props}>
        <SimpleForm>
            <TextInput source="user_name"/>
            <TextInput source="user_surname"/>
            <TextInput body source="email"/>
            <NumberInput source="primary_number"/>
            <TextInput source="area_name" />
        </SimpleForm>
        </Create>
    )
}

export default ProductCreate
