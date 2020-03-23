import React from "react";

import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const schema = Yup.object().shape({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().email().required('A valid Email address is required'),
  phone: Yup.string().required('Phone number is required'),
});

export default class CreateEdit extends React.Component {
  render() {
    const initialValues = (Object.keys(this.props.contact).length > 0) ? this.props.contact : { firstname: '', lastname: '', email: '', phone: '' };

    return (
      <Formik key={this.props.contact.id} onSubmit={this.props.handleSubmit} validationSchema={schema} initialValues={initialValues}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="First Name" 
                onChange={handleChange} 
                value={values.firstname}
                isValid={touched.firstname && !errors.firstname} 
                isInvalid={!!errors.firstname}
              />
              <Form.Control.Feedback type="invalid">{errors.firstname}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Last Name" 
                onChange={handleChange} 
                value={values.lastname} 
                isValid={touched.lastname && !errors.lastname} 
                isInvalid={!!errors.lastname}
              />
              <Form.Control.Feedback type="invalid">{errors.lastname}</Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                onChange={handleChange} 
                value={values.email} 
                isValid={touched.email && !errors.email} 
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Phone Number" 
                onChange={handleChange} 
                value={values.phone} 
                isValid={touched.phone && !errors.phone} 
                isInvalid={!!errors.phone}
              />
              <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="outline-primary" disabled={isSubmitting}>Submit</Button>
          </Form>
        )}
      </Formik>
    );
  }
}