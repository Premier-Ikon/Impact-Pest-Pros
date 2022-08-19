import './AboutUsScreen.css'
import React from "react";
import {Link} from "react-router-dom";
import JoinUs from "../../icons/JOIN_US.png"
import Crown from "../../icons/CROWN.png"
import Group from "../../icons/GROUP.png"
import Consistent from "../../icons/CONSISTENT.png"
import HandShake from "../../icons/HAND_SHAKE.png"
import {Button} from "../../components/Buttons";


function AboutUsScreen() {
    return (
        <div className="about-us-screen">
            <div className="top-box"/>
            <div className="initial-container">
                <div className="general-header-about">
                    <h2>About Us</h2>
                    <div className="general-header-image">
                        <div className="mask-about">

                        </div>
                    </div>

                    <div className="about-message">
                        <h4 className="about-text">The Impact Pest Guarantee means you can relax knowing we'll impact
                            your
                            rodent and insect problem and keep it impacted for as long as you keep your plan. If they
                            do
                            return, we will come back -- at no additional cost to you. We strive to offer the best plans
                            in the area, and will tailor to our customers needs. If you are ever experiencing a problem be sure to give us a call.
                            <Button buttonStyle={"btn--contact"} onClick={() => window.open( 'tel: 951-458-3966', '_blank')}>(951)458-3966</Button>

                        </h4>
                    </div>

                </div>
            </div>
            <div className="mission-container">
                <div className="mission-header">
                    <div className="mission-statement">
                        <div className="box-header">
                            <h4 className="header-text-box">Mission Statement</h4>
                        </div>
                        <div className="box-message">
                            <p className="box-message-text">Here at impact pest pros we strive to be the top family run pest control company in the area. We understand the impact pests can have at your home so we strive to always leave and impact.</p>
                        </div>
                    </div>
                    <div className="vision-statement">
                        <div className="box-header">
                            <h4 className="header-text-box">Vision Statement</h4>
                        </div>
                        <div className="box-message">
                            <p className="box-message-text">At Impact Pest Pros our vision is to see your home pest free. We will always be here for our customers, and will always strive to leave an impact at your home.</p>
                        </div>
                    </div>
                </div>
                <div className="mission-header-mobile">
                    <div>
                        <div className="mission-statement">
                            <div className="box-header">
                                <h4 className="header-text-box">Mission Statement</h4>
                            </div>
                            <div className="box-message">
                                <p className="box-message-text">Here at impact pest pros we strive to be the top family run pest control company in the area. We understand the impact pests can have at your home so we strive to always leave and impact.</p>
                            </div>
                        </div>
                        <div className="vision-statement">
                            <div className="box-header">
                                <h4 className="header-text-box">Vision Statement</h4>
                            </div>
                            <div className="box-message">
                                <p className="box-message-text">At Impact Pest Pros our vision is to see your home pest free. We will always be here for our customers, and will always strive to leave an impact at your home.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mission-body">
                    <div className="mission-button">
                        <Link to={"/contact-us"}>
                            <button className={'mission-button-style'}>
                                <img src={JoinUs} className="button-image"/>

                            </button>
                        </Link>
                    </div>
                    <div className="mission-body-elements">
                        <div className="core-values">
                            <div className="box-header-lower">
                                <h4 className="header-text-box">Core Values</h4>
                            </div>
                            <div className="icon-container-mission">
                                <i className="fa-regular fa-handshake" style={{color: "rgb(179, 231, 253)", fontSize: "75px"}}></i>
                                <i className="fa-solid fa-trophy" style={{color: "rgb(179, 231, 253)", fontSize: "75px"}}></i>
                                <i className="fa-solid fa-people-group" style={{color: "rgb(179, 231, 253)", fontSize: "75px"}}></i>
                                <i className="fa-regular fa-clock" style={{color: "rgb(179, 231, 253)", fontSize: "75px"}}></i>
                            </div>
                        </div>
                        <div className="company-history">
                            <div className="box-header-lower">
                                <h4 className="header-text-box">Company History</h4>
                            </div>
                            <div className="box-message">
                                <p className="box-message-text">Impact Pest Pros is a family run company and we started in Murrieta California. We currently only have one technician in which is the owner of the company. He strives to always offer the best services and leave an impact at your home.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mission-body-mobile">
                    <div className="mission-body-elements">
                        <div className="core-values">
                            <div className="box-header-lower">
                                <h4 className="header-text-box">Core Values</h4>
                            </div>
                            <div className="icon-container-mission">
                                <i className="fa-regular fa-handshake" style={{color: "rgb(179, 231, 253)", fontSize: "50px"}}></i>
                                <i className="fa-solid fa-trophy" style={{color: "rgb(179, 231, 253)", fontSize: "50px"}}></i>
                                <i className="fa-solid fa-people-group" style={{color: "rgb(179, 231, 253)", fontSize: "50px"}}></i>
                                <i className="fa-regular fa-clock" style={{color: "rgb(179, 231, 253)", fontSize: "50px"}}></i>
                            </div>
                        </div>
                        <div className="company-history">
                            <div className="box-header-lower">
                                <h4 className="header-text-box">Company History</h4>
                            </div>
                            <div className="box-message">
                                <p className="box-message-text">Impact Pest Pros is a family run company and we started in Murrieta California. We currently only have one technician in which is the owner of the company. He strives to always offer the best services and leave an impact at your home.</p>
                            </div>
                            <Button buttonStyle={"btn--long"} path={"/contact-us"} target={"_blank"}>Free Quote</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutUsScreen;