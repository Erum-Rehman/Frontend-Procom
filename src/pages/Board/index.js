import React, { useState } from "react";
import Header from '../../components/Header';
import './index.scss';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import BasicModal from "../../components/BasicModal";
import axios from 'axios';

const Board = () => {
    const [title, setTitle] =useState();
    const [description, setDescription] = useState();
    const [titleError, setTitleError] = useState();
    const [descriptionError, setDescriptionError] = useState();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const createBoard = (data) => {
        
    try {
      axios.post("http://localhost:5000/api/v1/newBoard", { ...data })
        .then(res => (res.data.data.user))
        .catch(err => console.log({ err }));
    } catch (error) {
      console.log({ error })
    }
  }
        
    

    return (
        <>
            <BasicModal open={open} 
                onClick={createBoard}
                handleOpen={handleOpen} 
                handleClose={handleClose} />
            <Header />
            <div className="board">
                <h4 className="board-heading">Board</h4>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" onClick={handleOpen}>Create Board</Button>
                </Stack>
            </div>
            <div className="board-table">
                <div style={{ fontSize: '20px' }}>Title</div>
                <div style={{ fontSize: '20px' }}>Description</div>
            </div>
        </>
    )
}
export default Board;



