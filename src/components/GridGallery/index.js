import React, { useState } from "react";
import Card from '../Card'
import './index.scss';

const GridGallery = ({ title, items }) => {
    return(
        <>
        <div className="grid-container" >
            <p style={{margin: '5px 15px 10px', fontWeight: '500'}}>{title}</p>
            <div className="grid-container__items">
                {/* {
                    items.map((item, index) => <Card key={index} />)
                } */}
                <Card />
                <Card />

            </div>
        </div>
        </>
    )
}
export default GridGallery;