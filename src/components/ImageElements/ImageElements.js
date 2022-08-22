import './ImageElements.css'
import React from "react";
import JoinUs from "../../icons/JOIN_US.png";
import {Link} from "react-router-dom";


export const ImageElements = ({image, description, style, link}) => {
    return (
        <div>
            <Link to={`/${link}`}>
                <button className="image-button">
                    <div className={"circle-container"}>
                        <img className={`circle-element-${style}`} src={image}  alt={"element"}/>
                    </div>
                </button>
            </Link>
            <p className={`element-text-${style}`}>{description}</p>
        </div>

)
}
