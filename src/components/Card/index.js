import React, { useState } from "react";
import './index.scss';
import Label from "../Label";
import BasicModal from "../Details";

const Card = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <BasicModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
            <div className="card" onClick={handleOpen}>
                <p className="card-title">Aenean dolor massa, rhoncus ut tortor in, pretium tempus neque. </p>
                <div className="card-options">
                    <Label />
                    <div className="thumbnail">AR</div>
                </div>

            </div>
        </>
    )
}
export default Card;