import React from 'react'
import { List, Datagrid, TextField, EditButton, NumberField, DeleteButton, ImageField, BooleanField } from "react-admin";

const CatalogueProductList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                
                <TextField source="id"/>
                <TextField label="SKU" source="sku"/>
                <TextField source="name"/>
                <TextField body source="description"/>
                <NumberField label="Price" source="unit_price"/>
                <ImageField label="Image" source="image_url"/>
                <BooleanField valueLabelTrue="Active" valueLabelFalse="InActive" source="active"/>
                <NumberField label="Stock" source="unit_in_stock"/>
                <TextField source="category_id"/>
                <EditButton basePath='/products'/>
                <DeleteButton basePath='/products'/>
            </Datagrid>
        </List>
    )
}

export default CatalogueProductList;
