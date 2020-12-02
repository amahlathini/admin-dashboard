import React from "react";
import {
  SimpleForm,
  NumberInput,
  ImageInput,
  Edit,
  TextInput,
  ReferenceInput,
  SelectInput
} from "react-admin";

const ProductEdit = (props) => {

//   const formatIriAsInt = v => {    
//     if (v.indexOf('/') >= 0) {
//         v = v.split('/');

//         return parseInt(v[v.length - 1]);
//     }

//     return v;
// }


  return (
    <Edit title="Edit Product" {...props}>
      <SimpleForm>
      <TextInput source="item_name"/>
                <TextInput body source="item_description"/> 
                <NumberInput label="Price" source="item_price"/>
                <ImageInput label="Image" source="image_url"/>
                <NumberInput label="Stock" source="item_quantity"/>
                
      </SimpleForm>
      <ReferenceInput label="Category" source="category_id" 
                reference="categories">
                <SelectInput optionText="category_name"/>
                </ReferenceInput>
                <ReferenceInput label="Pharmacy" source="pharmacy_id" reference="pharmacies">
                <SelectInput optionText="pharmacy_name"/>
                </ReferenceInput>
    </Edit>
  );
};

export default ProductEdit;
