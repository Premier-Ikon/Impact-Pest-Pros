import './RightProcessElement.css';
import React from "react";



function RightProcessElement({icon, name, secondName, description, image}) {
    return (
        <div>
            <div className="process-element-container">
                <div>
                    <div className="service-title">
                        <i className={icon}/>
                        <p className={`process-text-name`}>{name}</p>
                    </div>
                    <div>
                        <h2 className={`process-text-second`}>{secondName}</h2>
                        <p className={`process-text`}>{description}</p>
                    </div>
                </div>
                <div className={`service-background-${image}`}>
                    <div className="service-mask"/>

                </div>
            </div>

            <div className="process-element-container-mobile">
                <div>
                    <div className="service-title">
                        <i className={icon}/>
                        <p className={`process-text-name`}>{name}</p>
                    </div>
                    <div>
                        <h2 className={`process-text-second`}>{secondName}</h2>
                        <p className={`process-text`}>{description}</p>
                    </div>
                </div>
                <div className={`service-background-${image}`}>
                    <div className="service-mask"/>

                </div>
            </div>
        </div>

)
}

export default RightProcessElement