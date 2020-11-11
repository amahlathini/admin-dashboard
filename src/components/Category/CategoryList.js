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
        <EditButton basePath="/categories" />
        <DeleteButton basePath="/categories" />
      </Datagrid>
    </List>
  );
};

export default CategoryList;
