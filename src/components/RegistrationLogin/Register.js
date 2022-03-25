import React, { useState } from "react";
import './index.scss';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButnField from "../../components/Button";
import Login from "./Login";
import { Link } from "react-router-dom";
// import { FiEye } from "react-icons/fi";
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from "formik";

const RegexExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)
const RegistrationSchema = Yup.object().shape({
    email: Yup.string()
        .email("invalid email address")
        .required("field req")
    ,
    password: Yup.string()
        .min(8, "less than limit")
        .max(20, "exeeds the limit")
        .matches(RegexExp, "wrong pattern")
        .oneOf([Yup.ref('confirmPassword'), null], 'Password do not match'),
})

const Registration = ({ }) => {

    const handleRegistration = (data) => {
        const body = {
            email: data.email.toLowerCase(),
            password: data.password,
            name: data.fullName,
            confirmPassword: data.confirmPassword,
            role: "user",
            user: '',
        }
        console.log({body})
        try {
            axios.post("http://192.168.43.112:5000/api/v1/user/signup", { ...body })
                .then(res => (res.data.data.user))
                .catch (err=> console.log({err}));
        } catch (error) {
            console.log({error})
        }
        }

return (
    <Formik
        initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        }}
        validationSchema={RegistrationSchema}
        onSubmit={values => handleRegistration(values)}
    >
        {({ values, errors, handleChange, handleSubmit, touched }) =>
            <>
                <form className="login-container" onSubmit={handleSubmit}>
                    <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Register Your account</h2>
                    <div className="login-cell">
                        <label>User Name *</label><br />
                        <input
                            type="text" name="fullName"
                            placeholder="Your first name"
                            className="login-field"
                            value={values.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="login-cell">
                        <label>Email *</label><br />
                        <input
                            type="email" name="email"
                            placeholder="Enter your email"
                            className="login-field"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                    </div>
                    <div className="login-cell">
                        <label>Password *</label><br />
                        <input
                            type="password" name="password"
                            placeholder="***********"
                            className="login-field"
                            value={values.password}
                            onChange={handleChange}
                        />
                        {/* <label className="password-login"><FiEye /></label> */}
                        {errors.password && touched.password ? <p>{errors.password}</p> : <></>}
                    </div>

                    <div className="login-cell">
                        <label>Confirm Password *</label><br />
                        <input
                            type="password" name="confirmPassword"
                            placeholder="***********"
                            className="login-field"
                            value={values.confirmPassword}
                            onChange={handleChange}
                        />
                        {/* <label className="password-login"><FiEye /></label> */}
                    </div>
                    <div className="login-cell">
                        <input type="checkbox" style={{ marginRight: '15px' }} />
                        <label style={{ color: "#505050", fontSize: '17px', fontWeight: '500' }}>
                            I agree to the Terms &amp; Policy</label>

                    </div>
                    <ButnField title="CREATE AN ACCOUNT" type="submit" />
                </form>
            </>
        }
    </Formik>
)
}

export default Registration;