import * as yup from 'yup';

export const NAME_SCHEMA = yup.string().matches(/^[A-Z][a-z]{0,64}$/);

export const USER_SCHEMA = yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#$!%^&]).{8,32}$/, 'Password must have 1 Upper and 1 lowercase letter, 1 number and 1 symbol')
    .required(),
});