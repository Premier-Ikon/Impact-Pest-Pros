import './ExclusionElement.css';
import React from "react";

export const ExclusionElement = ({icon, description, quote}) => {
    return (
        <div className={"exclusion-element-container"}>
            <div className="icon">
                <i className={icon}/>
            </div>
            <div className="items">
                <p className={"exclusion-element-text"}>{description}</p>
                {/*<br className={"break-point"}/>*/}
                <div className={"exclusion-break-point"}/>
                <p className={"exclusion-element-quote"}>{quote}</p>
            </div>
        </div>
    )
}