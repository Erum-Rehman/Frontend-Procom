import React, { useState } from 'react';
import './index.scss';
import { Dropdown, DropdownButton, SplitButton, ButtonGroup } from "react-bootstrap";

const MenuItem = ({MenuTitle, options}) => {
    return (
        <>
            <DropdownButton
                as={ButtonGroup}
                key="down"
                id={`dropdown-button-drop-down`}
                drop="down"
                variant="Light"
                title={MenuTitle}
                className="dropdown"
            >
               {options.map((item, index) => 
                <Dropdown.Item href="" key={index}>{item?.name || item}</Dropdown.Item>
               )}
            </DropdownButton>
        </>
    )
}
export default MenuItem;