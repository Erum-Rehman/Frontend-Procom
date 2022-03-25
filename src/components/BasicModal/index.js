import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import * as Yup from 'yup';
import { Formik } from "formik";
import './index.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const popupSchema = Yup.object().shape({
  title: Yup.string()
    .required("field is required")
  ,
  description: Yup.string()
    .required("field is required")
})


export default function BasicModal({ open, handleClose, onClick }) {
  
  return (
    <div>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}
        >
            <Formik
              initialValues={{
                title: "",
                description: "",
              }}
              validationSchema={popupSchema}
              onSubmit={values => console.log(values)}
            >
              {({ values, errors, handleChange, handleSubmit, touched }) =>
                <form onSubmit={handleSubmit}>
                  <TextField id="standard-basic"
                    label="Title"
                    name="title"
                    style={{ width: '38ch' }}
                    value={values.title}
                    onChange={handleChange}
                    variant="standard"
                    className='modal-boardTitle' />
                  {errors.title && touched.title && <p className='error'>{errors.title}</p>}
                  <div className='description'>
                    <TextField
                      id="outlined-multiline-static"
                      label="Description"
                      name="description"
                      multiline
                      rows={4}
                      style={{ width: '38ch', marginTop: '15px' }}
                      value={values.description}
                      onChange={handleChange}
                    />
                    {errors.description && touched.description && <p className='error'>{errors.description}</p>}
                  </div>
                  <Stack direction="row" spacing={2} className="createButn">
                    <Button type="submit" variant="contained">Create</Button>
                  </Stack>
                </form>
              }
            </Formik>
          {/* </Box> */}

            </Box> 
      </Modal> 
    </div>
  );
}
