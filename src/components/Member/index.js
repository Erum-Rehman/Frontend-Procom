import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

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


export default function Member({ isOpen, handleCloseMember }) {
  const [value, setValue] = useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleCloseMember}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '35ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="standard-basic" label="Member" variant="standard" />
           
          </Box>

        </Box>
      </Modal>
    </div>
  );
}
