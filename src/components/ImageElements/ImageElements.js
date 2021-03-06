import './ImageElements.css'
import React from "react";


export const ImageElements = ({image, description, style}) => {
    return (
        <div className={"circle-container"}>
            <mask/>
            <img className={`circle-element-${style}`} src={image} />
            <p className={`element-text-${style}`}>{description}</p>
        </div>
    )
}
