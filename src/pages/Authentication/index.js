import React, { Component, useState } from "react";
import Login from "../../components/RegistrationLogin/Login";
import Register from "../../components/RegistrationLogin/Register";
import { Route, Routes, Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Authentication = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
           
            <div className="Login-page">
                <div className="login-btn">
                    <button className="butn-field" onClick={() => navigate("/register")}>Register</button>
                    <button className="butn-field" onClick={() => navigate("/login")}>Login</button>
                </div>
                {location.pathname === "/register" ? <Register /> : <Login />}

            </div>

        </>
    )
}
export default Authentication;



