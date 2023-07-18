import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { USER_SCHEMA } from 'utils/validation/userValidation';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const SignUpForm = (props) => {
  const handleSignUp = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSignUp}>
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '400px',
          padding: '20px',
        }}
      >
        <Field type='text' name='firstName' placeholder='firstName' />
        <Field type='text' name='lastName' placeholder='lastName' />
        <Field type='email' name='email' placeholder='email' />
        <Field type='password' name='password' placeholder='password' />
        <button type='submit'>Submit</button>
        <button type='reset'>Reset</button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
