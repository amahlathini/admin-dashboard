import React from 'react'
import { Create, SimpleForm, NumberInput, ImageInput, TextInput } from "react-admin";

const ProductCreate = (props) => {
    return (
        <Create title='Add Product' {...props}>
        <SimpleForm>
        <TextInput source="id"/>
                <TextInput source="item_name"/>
                <TextInput body source="item_description"/> 
                <NumberInput label="Price" source="item_price"/>
                <ImageInput label="Image" source="image_url"/>
                <NumberInput label="Stock" source="item_quantity"/>
                <TextInput source="category_id"/>
                <TextInput source="pharmacy_id"/>
        </SimpleForm>
        </Create>
    )
}

export default ProductCreate
