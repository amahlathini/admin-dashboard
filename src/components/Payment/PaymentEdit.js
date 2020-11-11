import React from "react";
import { Edit, SimpleForm, NumberInput,DateInput, TextInput } from "react-admin";

const PaymentEdit = (props) => {
  return (
    <Edit title="Edit Payment" {...props}>
      <SimpleForm>
        <TextInput disable source="id" />
        <TextInput source="status" />
        <TextInput source="type" />
        <TextInput source="notification" />
        <NumberInput disable source="total" />
        <DateInput source="date" />
      </SimpleForm>
    </Edit>
  );
};

export default PaymentEdit;
