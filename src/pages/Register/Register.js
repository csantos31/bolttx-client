import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';

function Register() {
    const handleClickRegister = (values) => {
        Axios.post('http://localhost:5000/api/register', {
            email: values.email,
            password: values.password,
            name: values.name,
        }).then((response) => {
            console.log(response);
        })
    }

    const validateRegister = yup.object().shape({
        email: yup.string()
            .email('This email is not valid')
            .required('This field is required'),
        password: yup.string()
            .min(6, 'At least 6 characters')
            .required('This field is required'),
        confirmPassword: yup.string()
            .oneOf([yup.ref("password"), null], 'The password does not match')
    });

    return (
        <div className="container">
            <h1>Cadastro</h1>
            <Formik
                initialValues={{}}
                onSubmit={handleClickRegister}
                validationSchema={validateRegister}
            >
                <Form className='login-form'>
                    <div className='login-form-group'>
                        <Field name='name' className='form-field' placeholder='name' />

                        <ErrorMessage
                            component='span'
                            name='name'
                            className='form-error'
                        />
                    </div>

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

                    <div className='login-form-group'>
                        <Field name='confirmPassword' className='form-field' placeholder='confirm password' />

                        <ErrorMessage
                            component='span'
                            name='confirmPassword'
                            className='form-error'
                        />
                    </div>
                    <button className='button' type='submit'>Login</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Register;