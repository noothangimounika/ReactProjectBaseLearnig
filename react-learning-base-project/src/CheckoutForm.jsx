import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const CheckoutForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'Must be exactly 10 digits')
            .required('Phone number is required'),
        address: Yup.string()
            .required('Address is required'),
        city: Yup.string()
            .required('City is required'),
        state: Yup.string()
            .required('State is required'),
        zip: Yup.string()
            .matches(/^[0-9]{5}$/, 'Must be exactly 5 digits')
            .required('Zip Code is required'),
    });

    const handleSubmit = (values) => {
        // Handle form submission (e.g., send data to an API)
        console.log('Form data:', values);
    };

    return (
        <div className="checkout-form">
            <h2>Checkout</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <Field type="text" name="firstName" />
                            <ErrorMessage name="firstName" component="div" />
                        </div>

                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <Field type="text" name="lastName" />
                            <ErrorMessage name="lastName" component="div" />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>

                        <div>
                            <label htmlFor="phone">Phone</label>
                            <Field type="text" name="phone" />
                            <ErrorMessage name="phone" component="div" />
                        </div>

                        <div>
                            <label htmlFor="address">Address</label>
                            <Field type="text" name="address" />
                            <ErrorMessage name="address" component="div" />
                        </div>

                        <div>
                            <label htmlFor="city">City</label>
                            <Field type="text" name="city" />
                            <ErrorMessage name="city" component="div" />
                        </div>

                        <div>
                            <label htmlFor="state">State</label>
                            <Field type="text" name="state" />
                            <ErrorMessage name="state" component="div" />
                        </div>

                        <div>
                            <label htmlFor="zip">Zip Code</label>
                            <Field type="text" name="zip" />
                            <ErrorMessage name="zip" component="div" />
                        </div>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CheckoutForm;
