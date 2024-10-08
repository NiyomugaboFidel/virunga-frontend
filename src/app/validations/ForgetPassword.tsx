import * as yup from "yup";

export const ForgetPasswordValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
});