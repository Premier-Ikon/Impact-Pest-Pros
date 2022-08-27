import './ImageElement2.css'

import React from "react";
import {Link} from "react-router-dom";


export const ImageElement2 = ({image, description, style, link}) => {
    return (
        <div>
            <Link to={`/${link}`}>
                <button className="image-button">
                    <div className={"circle-container-pest"}>
                        <img className={`circle-element-${style}-pest`} src={image}  alt={"element"}/>
                    </div>
                </button>
            </Link>
            <div className="align-center-type">
                <Link to={`/${link}`}>
                    <button className="image-button">
                        <div className="service-button-type">
                            <p className={`element-text-${style}`}>{description}</p>
                        </div>
                    </button>
                </Link>
            </div>
        </div>

    )
}