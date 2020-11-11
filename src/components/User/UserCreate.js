import React from 'react'
import { Create, SimpleForm, NumberInput,ImageInput, TextInput } from "react-admin";

const ProductCreate = (props) => {
    return (
        <Create title='Add Product' {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <TextInput source="surname"/>
            <TextInput body source="email_address"/>
            <NumberInput source="phone"/>
            <TextInput source="Address" />
            <ImageInput label='Profile Picture' source="image" />
        </SimpleForm>
        </Create>
    )
}

export default ProductCreate
