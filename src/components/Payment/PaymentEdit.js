import React from "react";
import { Edit, SimpleForm, NumberInput,DateInput, TextInput } from "react-admin";

const PaymentEdit = (props) => {
  return (
    <Edit title="Edit Payment" {...props}>
      <SimpleForm>
        <TextInput disable source="id" />
        <TextInput source="type_of_payment" />
        <TextInput source="pharmacy_id" />
        <TextInput source="user_id" />
        <NumberInput disable source="payment_status" />
        <NumberInput disable source="payment_total" />
        <DateInput source="date" />
      </SimpleForm>
    </Edit>
  );
};

export default PaymentEdit;
