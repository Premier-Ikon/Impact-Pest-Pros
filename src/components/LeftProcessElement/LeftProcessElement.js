import './LeftProcessElement.css';
import React from "react";


function LeftProcessElement({icon, name, secondName, description, image}) {
    return (
        <div className="process-element-container">
            <div className={`service-left-background-${image}`}>
                <div className="service-mask"/>

            </div>
            <div className="service-text-container">
                <div className="service-title">
                    <i className={icon}/>
                    <p className={`process-text-name`}>{name}</p>
                </div>
                <div>
                    <h2 className={`process-text-second`}>{secondName}</h2>
                    <p className={`process-text`}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default LeftProcessElement