import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Label from "../Label";
import './index.scss';
import MenuItem from '../MenuItem';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 750,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function BasicModal({ open, handleClose }) {
    const [value, setValue] = useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className="Details">
                            <div className="details-left">
                                <p className="Details-title">Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque.</p>
                                <div className="detail-description">
                                    <p>
                                        Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenatis leo et dictum finibus.
                                        Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. Vestibulum venenatis leo et dictum finibus.
                                    </p>
                                </div>
                            </div>
                            <div className="Details-right">
                                <div className="Details-right__content">
                                <div className='status'>
                                    <p>Status</p>
                                    <MenuItem MenuTitle="To Do" options={["To do", "In Progress", "Code Review", "Done"]}/>
                                </div>
                                <div className='assignee'>
                                    <p>Assignee</p>
                                    <MenuItem MenuTitle="Unassigned" options={[{name: "Anum"}, { name: "Erum" }]} />
                                </div>
                                <div className='priority'>
                                    <p>Priority</p>
                                    <MenuItem MenuTitle="Low" options={["Low", "Medium", "High"]} />
                                </div>
                                </div>
                            </div>

                        </div>

                    </Box>

                </Box>
            </Modal>
        </div>
    );
}
