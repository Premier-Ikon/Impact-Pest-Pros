import './RightProcessElement.css';
import React from "react";



function RightProcessElement({icon, name, secondName, description, image}) {
    return (
        <div className="process-element-container">
            <div>
                <div className="service-title">
                    <i className={icon}/>
                    <p className={`process-text-name`}>{name}</p>
                </div>
                <div>
                    <p className={`process-text-second`}>{secondName}</p>
                    <p className={`process-text`}>{description}</p>
                </div>
            </div>
            <div className={`service-background-${image}`}>
                <div className="service-mask"/>

            </div>
        </div>
    )
}

export default RightProcessElement