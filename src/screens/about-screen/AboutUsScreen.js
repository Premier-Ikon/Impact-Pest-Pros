import './AboutUsScreen.css'
import React from "react";
import {Link} from "react-router-dom";
import JoinUs from "../../icons/JOIN_US.png"
import Crown from "../../icons/CROWN.png"
import Group from "../../icons/GROUP.png"
import Consistent from "../../icons/CONSISTENT.png"
import HandShake from "../../icons/HAND_SHAKE.png"


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
                            rodent and wildlife problem and keep it impacted for as long as you keep your plan. If they
                            do
                            return, we will come back -- at no additional cost to you.The Impact Pest Guarantee means
                            you
                            can relax knowing we'll impact your rodent and wildlife problem and keep it impacted for as
                            long
                            as you keep your plan. If they do return, we will come back -- at no additional cost to
                            you.The
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
                            <p className="box-message-text">The Impact Pest Guarantee means you can relax knowing we'll you can relax k impact your rodent and wildlife problem and keep it impac</p>
                        </div>
                    </div>
                    <div className="vision-statement">
                        <div className="box-header">
                            <h4 className="header-text-box">Vision Statement</h4>
                        </div>
                        <div className="box-message">
                            <p className="box-message-text">The Impact Pest Guarantee means you can relax knoproblem and keep it impac</p>
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
                        {/*<img src={JoinUs} className="button-image"/>*/}

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
                                <p className="box-message-text">The Impact Pest Guarantee means you can relax knowing  you can relax kwe'l you can relax kl impact your rodent and wildlife problem and keep it impac</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUsScreen;