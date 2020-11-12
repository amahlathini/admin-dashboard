import React from "react";
import {
  List,
  Datagrid,
  DeleteButton,
  EditButton,
  TextField,
  ImageField,
} from "react-admin";

const CategoryList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <ImageField source="price" />
        <EditButton basePath="/product-category" />
        <DeleteButton basePath="/product-category" />
      </Datagrid>
    </List>
  );
};

export default CategoryList;
