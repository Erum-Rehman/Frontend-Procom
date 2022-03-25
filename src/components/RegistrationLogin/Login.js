import React, { useState } from "react";
import './index.scss';
import { useNavigate } from "react-router-dom";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButnField from "../../components/Button";
// import { FiEye } from "react-icons/fi";
// import { saveUser } from '../../redux/Action'
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from "formik";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("invalid email address")
        .required("field req")
    ,
    password: Yup.string()
        .required("field req")
})

const Login = () => {
    const handleLogin = (data) => {
        const body = {
            email: data.email,
            password: data.password,
        }
        console.log({ body })
        try {
            axios.post("http://localhost:5000/api/v1/user/login", { ...body })
                .then(res => (res.data.data.user))
                .catch(err => console.log({ err }));
        } catch (error) {
            console.log({ error })
        }
    }
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={values => handleLogin(values)}
        >
            {({ values, errors, handleChange, handleSubmit, touched }) =>
                <>
                    <form className="login-container"  onSubmit={handleSubmit}>
                        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login Your Account</h2>
                        <div className="login-cell">
                            <label>Email</label><br />
                            <input
                                type="text" name="email"
                                placeholder="Your email address"
                                className="login-field"
                                value={values.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="login-cell">
                            <label>Password</label><br />
                            <input
                                type="password"
                                placeholder="***********"
                                name="password"
                                className="login-field"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {/* <label className="password-login"><FiEye /></label> */}
                        </div>
                        <span style={{ textAlign: 'end' }}>Forgotten Password?</span>

                        <div className="checkbox-div">
                            <input type="checkbox" style={{ marginRight: '15px' }} />
                            <label style={{ color: "#505050", fontSize: '17px', fontWeight: '500' }}>
                                Remember Me</label>
                        </div>
                        <ButnField title="LOGIN ACCOUNT" type="submit" />
                    </form>
                </>
            }
        </Formik>
    )
}
export default Login;
