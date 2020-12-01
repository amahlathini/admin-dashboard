import React from 'react'
import { Create, SimpleForm, NumberInput, ReferenceInput, SelectInput, ImageInput, TextInput } from "react-admin";

const ProductCreate = (props) => {
    return (
        <Create title='Add Product' {...props}>
        <SimpleForm>
                <TextInput source="item_name"/>
                <TextInput body source="item_description"/> 
                <NumberInput label="Price" source="item_price"/>
                <ImageInput label="Image" source="image_url"/>
                <NumberInput label="Stock" source="item_quantity"/>
                <ReferenceInput label="Category" source="category_id" reference="categories">
                <SelectInput optionText="category_name"/>
                </ReferenceInput>
                <ReferenceInput label="Pharmacy" source="pharmacy_id" reference="pharmacies">
                <SelectInput optionText="pharmacy_name"/>
                </ReferenceInput>
        </SimpleForm>
        </Create>
    )
}

export default ProductCreate
