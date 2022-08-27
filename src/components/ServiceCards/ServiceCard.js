import './ServiceCard.css'
import React from "react";
import {Link} from "react-router-dom";


function ServiceCard({name, description1, description2, description3, image}) {
    return (
        <div>
            <div className="initial-card-container">
                <div className={`service-card-background-${image}`}>
                    <div className="service-mask-card"/>
                </div>
                <div className="content-container">
                    <div className="header-container">
                        <h3 className="card-header">{name}</h3>
                    </div>
                    <div className="description-container">
                        <div className="header-container-card">
                            <div className="content-container-card">
                                <p className="dash">-</p>
                                {description1}
                            </div>
                        </div>
                        <div className="header-container-card">
                            <div className="content-container-card">
                                <p className="dash">-</p>
                                {description2}
                            </div>
                        </div>
                        <div className="header-container-card">
                            <div className="content-container-card">
                                <p className="dash">-</p>
                                {description3}
                            </div>
                        </div>
                    </div>
                    <div className="button-container">
                        <Link to={"/contact-us"}>
                            <button className="card-button">
                                <p >Get Quote</p>
                            </button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default ServiceCard;