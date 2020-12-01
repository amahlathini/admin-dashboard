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
      <TextField source="driver_name"/>
            <TextField source="driver_surname"/>
            <TextField body source="car.car_colour"/>
            <TextField source="car.car_registration" />
            <TextField label='Car Name' source="car.car_name" />
            <TextField label='Model' source="car.car_model" />
            <NumberField source="latitude"/>
            <NumberField source="longitude"/>
        <EditButton basePath="/drivers" />
        <DeleteButton basePath="/drivers" />
      </Datagrid>
    </List >
  );
};

export default DriverList;
