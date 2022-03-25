import React, { Component } from "react";
import './index.scss';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ButnField = (props) => {
    return (
            <Button id="button-addon2" className='butn-field1' onClick={props.onClick} type={props.type}>
                {props.title}
            </Button>
    )
}
export default ButnField;