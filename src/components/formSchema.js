import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().required("Pizza size is required"),
  topping1: yup.boolean(),
  topping2: yup.boolean(),
  topping3: yup.boolean(),
  topping4: yup.boolean(),
  instructions: yup.string().trim(),
});

export default formSchema;
