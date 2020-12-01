import React from 'react'
import { ReferenceField, List, Datagrid, useTranslate, Filter, FilterLiveSearch, TextField, EditButton, NumberField, DeleteButton, ImageField, BooleanField } from "react-admin";
import { makeStyles, Chip } from '@material-ui/core';

const useQuickFilterStyles = makeStyles(theme => ({
    chip: {
        marginBottom: theme.spacing(1),
    },
}));

const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    const classes = useQuickFilterStyles();
    return <Chip className={classes.chip} label={translate(label)} />;
};

const ItemFilter = (props) => (
    <Filter {...props}>
        <FilterLiveSearch source="name" />
    </Filter>
);

const CatalogueProductList = (props) => {

    
    return (
        <List {...props} filters={<ItemFilter />}>
            <Datagrid>
                
                <TextField source="id"/>
                <TextField source="item_name"/>
                <TextField body source="item_description"/> 
                <NumberField label="Price" source="item_price"/>
                <ImageField label="Image" source="image_url"/>
                <NumberField label="Stock" source="item_quantity"/>
                <ReferenceField label="Category" source="category_id" reference="categories" link="show">
                <TextField source="category_name" />
                </ReferenceField>
                <ReferenceField label="Pharmacy" source="pharmacy_id" reference="pharmacies" link="show">
                <TextField source="pharmacy_name" />
                </ReferenceField>
                <EditButton basePath='/items'/>
                <DeleteButton basePath='/items'/>
            </Datagrid>
        </List>
    )
}

export default CatalogueProductList;
