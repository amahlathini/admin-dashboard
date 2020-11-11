import React from "react";
import {
  SimpleForm,
  NumberInput,
  BooleanInput,
  DateInput,
  ImageInput,
  Edit,
  TextInput,
} from "react-admin";

const ProductEdit = (props) => {
  return (
    <Edit title="Edit Product" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput label="SKU" source="sku" />
        <TextInput source="name" />
        <TextInput body source="description" />
        <NumberInput source="unit_price" />
        <ImageInput source="image_url" />
        <BooleanInput
          valueLabelTrue="Active"
          valueLabelFalse="InActive"
          source="active"
        />
        <NumberInput source="unit_in_stock" />
        <DateInput source="date_created" />
        <DateInput source="last_updated" />
        <TextInput source="category_id" />
      </SimpleForm>
    </Edit>
  );
};

export default ProductEdit;
