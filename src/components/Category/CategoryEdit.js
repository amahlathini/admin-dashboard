import React from 'react'
import { Edit, SimpleForm, ImageInput, TextInput } from "react-admin";

const CategoryEdit = (props) => {
    return (
        <Edit title='Edit Category' {...props}>
        <SimpleForm>
             <TextInput label="Category Name" source="category_name"/>
            <ImageInput source="category_image" />
        </SimpleForm>
        </Edit>
    )
}

export default CategoryEdit
