import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';

function Login() {
    const handleClickLogin = (values) => {
        Axios.post('http://localhost:3001/api/login', {
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log(response);
        })
    }

    const validateLogin = yup.object().shape({
        email: yup.string()
            .email('This email is not valid')
            .required('This field is required'),
        password: yup.string()
            .min(6, 'At least 6 characters')
            .required('This field is required'),
    });
    return (
        <div className="container">
            <h1>Login</h1>
            <Formik
                initialValues={{}}
                onSubmit={handleClickLogin}
                validationSchema={validateLogin}
            >
                <Form className='login-form'>
                    <div className='login-form-group'>
                        <Field name='email' className='form-field' placeholder='email' />

                        <ErrorMessage
                            component='span'
                            name='email'
                            className='form-error'
                        />
                    </div>

                    <div className='login-form-group'>
                        <Field name='password' className='form-field' placeholder='password' />

                        <ErrorMessage
                            component='span'
                            name='password'
                            className='form-error'
                        />
                    </div>
                    <button className='button' type='submit'>Login</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Login;