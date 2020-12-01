import React from "react";
import {
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  List,
  DeleteButton,
} from "react-admin";

const DriverList = (props) => {
  return (
    <List  {...props}>
      <Datagrid>
      <TextField source="driver_name" label='Name'/>
            <TextField source="driver_surname" label='Surname'/>
            <TextField body source="car.car_colour" label='Colour'/>
            <TextField source="car.car_registration" label='Registration #'/>
            <TextField label='Car Name' source="car.car_name" />
            <TextField label='Model' source="car.car_model" />
            <NumberField source="driver_location.latitude"/>
            <NumberField source="driver_location.longitude"/>
        <EditButton basePath="/drivers" />
        <DeleteButton basePath="/drivers" />
      </Datagrid>
    </List >
  );
};

export default DriverList;
