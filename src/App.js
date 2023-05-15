import React, { useState, useEffect } from "react";
import PizzaOrder from "./components/PizzaOrder";
import axios from "axios";
import formSchema from "./components/formSchema";
import * as yup from "yup";

const App = () => {
  const initialDisabled = true;

  const initialFormValues = {
    username: "",
    size: "",
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    instructions: "",
  };

  const initialFormErrors = {
    username: "",
    size: "",
    topping1: "",
    topping2: "",
    topping3: "",
    topping4: "",
    instructions: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [orders, setOrders] = useState([]);

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = () => {
    axios
      .post(`https://reqres.in/api/orders`)
      .then((res) => {
        setOrders([res.data, ...orders]);
      })
      .catch((err) => console.error(err))
      .finally(() => setFormValues(initialFormValues));
  };

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <>
      <h1>Lambda Eats</h1>
      <PizzaOrder
        values={formValues}
        change={inputChange}
        submit={onSubmit}
        errors={formErrors}
        disabled={disabled}
      />
    </>
  );
};
export default App;
