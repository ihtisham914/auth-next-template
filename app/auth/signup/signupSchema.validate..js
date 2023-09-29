import * as yup from "yup";

export const signupSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Password does not match"),
});
