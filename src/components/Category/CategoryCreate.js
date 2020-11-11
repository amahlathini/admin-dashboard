import React from 'react'
import { Create, SimpleForm, ImageInput, TextInput } from "react-admin";

const CategoryCreate = (props) => {
    return (
        <Create title='Add Category' {...props}>
        <SimpleForm>
            <TextInput label="Category Name" source="name"/>
            <ImageInput source="image" />
        </SimpleForm>
        </Create>
    )
}

export default CategoryCreate
