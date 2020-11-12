import React from 'react'
import { List, Datagrid, useTranslate, Filter, FilterLiveSearch, SearchInput, TextField, EditButton, NumberField, DeleteButton, ImageField, BooleanField } from "react-admin";
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
        <SearchInput source="sku" alwaysOn />
        <QuickFilter source="active" label="Active" defaultValue={true} />
        <QuickFilter source="unit_in_stock" label="Stock" defaultValue={150} />
        <QuickFilter source="price" label="Price" defaultValue={[3]} />
    </Filter>
);

const CatalogueProductList = (props) => {

    
    return (
        <List {...props} filters={<ItemFilter />}>
            <Datagrid>
                
                <TextField source="id"/>
                <TextField label="SKU" source="sku"/>
                <TextField source="name"/>
                {/* <TextField body source="description"/> */}
                <NumberField label="Price" source="unit_price"/>
                <ImageField label="Image" source="image_url"/>
                <BooleanField valueLabelTrue="Active" valueLabelFalse="InActive" source="active"/>
                <NumberField label="Stock" source="unit_in_stock"/>
                <TextField source="category_id"/>
                <EditButton basePath='/product'/>
                <DeleteButton basePath='/product'/>
            </Datagrid>
        </List>
    )
}

export default CatalogueProductList;
