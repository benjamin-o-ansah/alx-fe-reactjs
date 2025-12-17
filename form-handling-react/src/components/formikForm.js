import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  // Define Validation Schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log('Formik Data:', values);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Formik Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            <Field name="username" placeholder="Username" />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit">Submit via Formik</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;