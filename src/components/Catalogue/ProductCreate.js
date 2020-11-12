import React from 'react'
import { Create, SimpleForm, NumberInput, DateInput, BooleanInput, ImageInput, TextInput } from "react-admin";

const ProductCreate = (props) => {
    return (
        <Create title='Add Product' {...props}>
        <SimpleForm>
                <TextInput label="SKU" source="sku"/>
                <TextInput source="name"/>
                <TextInput body source="description"/>
                <NumberInput source="unit_price"/>
                <ImageInput source="image_url"/>
                <BooleanInput valueLabelTrue="Active" valueLabelFalse="InActive" source="active"/>
                <NumberInput source="unit_in_stock"/>
                {/* <DateInput source="date_created"/>
                <DateInput source="last_updated"/> */}
                <TextInput source="category_id"/>
        </SimpleForm>
        </Create>
    )
}

export default ProductCreate
