import React, { useState } from "react";
import GridGallery from "../../components/GridGallery";
import Header from '../../components/Header';
import './index.scss';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import BasicModal from "../../components/BasicModal";
import Member from "../../components/Member";

const GridList = () => {
    const [title, setTitle] =useState();
    const [description, setDescription] = useState();
    const [titleError, setTitleError] = useState();
    const [descriptionError, setDescriptionError] = useState();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [isOpen, setIsOpen] = useState(false);
    const handleOpenMember = () => setIsOpen(true);
    const handleCloseMember = () => setIsOpen(false);
    return (
        <>
            <BasicModal open={open} handleOpen={handleOpen} handleClose={handleClose}/>
            <Member isOpen={isOpen} handleOpenMember={handleOpenMember} handleCloseMember={handleCloseMember}/>
            <Header />
            <div className="gridHead">
                <div className="thumbnail">AR</div>
                <div className="addGrp">
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={handleOpenMember}>Add Member</Button>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" color="success"  onClick={handleOpen}>Add Card</Button>
                    </Stack>
                </div>
            </div>
            <div className="GridBar">
                <GridGallery title="TO DO" items={[]} />
                <GridGallery title="PROGRESS" items={[]} />
                <GridGallery title="CODE REVIEW" items={[]} />
                <GridGallery title="DONE" items={[]} />
            </div>

        </>
    )
}
export default GridList;