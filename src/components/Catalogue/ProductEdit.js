import React from "react";
import {
  SimpleForm,
  NumberInput,
  ImageInput,
  Edit,
  TextInput,
} from "react-admin";

const ProductEdit = (props) => {
  return (
    <Edit title="Edit Product" {...props}>
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
    </Edit>
  );
};

export default ProductEdit;
