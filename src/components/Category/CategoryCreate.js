import React from 'react'
import { Create, SimpleForm, ImageInput, TextInput } from "react-admin";

const CategoryCreate = (props) => {
    return (
        <Create title='Add Category' {...props}>
        <SimpleForm>
            <TextInput label="Category Name" source="category_name"/>
            <ImageInput source="category_image" />
        </SimpleForm>
        </Create>
    )
}

export default CategoryCreate
