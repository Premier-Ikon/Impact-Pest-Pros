import './IconElement.css'
import React from "react";


export const IconElement = ({icon, description, quote}) => {
    return (
        <div className={"icon-container"}>
            <i className={icon}/>
            <p className={"icon-element-text"}>{description}</p>
            <br className={"break-point"}/>
            <div className={"break-point"}/>
            <p className={"element-quote"}>{quote}</p>
        </div>
    )
}