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
      <TextField label="Category Name" source="category_name"/>
            <ImageField source="category_image" />
        <EditButton basePath="/categories" />
        <DeleteButton basePath="/categories" />
      </Datagrid>
    </List>
  );
};

export default CategoryList;
