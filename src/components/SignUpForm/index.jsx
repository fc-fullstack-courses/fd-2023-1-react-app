import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { USER_SCHEMA } from 'utils/validation/userValidation';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  accountLevel: 'basic',
};

const SignUpForm = (props) => {
  const handleSignUp = (values, formikBag) => {
    console.log(values);
    console.log(formikBag);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSignUp}
      validationSchema={USER_SCHEMA}
    >
      {(props) => {
        console.log(props);
        return (
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '400px',
              padding: '20px',
            }}
          >
            <Field type='text' name='firstName' placeholder='firstName' />
            <ErrorMessage name='firstName'>
              {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
            </ErrorMessage>
            <Field type='text' name='lastName' placeholder='lastName' />
            <ErrorMessage
              name='lastName'
              component='div'
              style={{ color: 'red' }}
            />
            <Field type='email' name='email' placeholder='email' />
            <ErrorMessage name='email' render={(msg) => <div>{msg}</div>} />
            <Field type='password' name='password' placeholder='password' />
            <ErrorMessage name='password' />
            <Field as='select' name='accountLevel'>
              <option value='basic'>Basic</option>
              <option value='advanced'>Advanced</option>
              <option value='Pro'>Pro</option>
            </Field>
            <button type='submit'>Submit</button>
            <button type='reset'>Reset</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
