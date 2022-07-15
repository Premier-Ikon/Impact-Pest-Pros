import './HomeScreen.css';
import React from "react";
import {Button} from '../../components/Buttons'
import {IconElement} from "../../components/IconElement/IconElement";
import {ImageElements} from "../../components/ImageElements/ImageElements";
import {ExclusionElement} from "../../components/ExclusionElement/ExclusionElement";
import ResidentialImage from '../../assets/RESIDENTIAL-IMAGE.png'
import CommercialImage from '../../assets/COMMERCIAL-IMAGE.png'
import EcoFriendlyImage from '../../assets/ECO-FRIENDLY-IMAGE.png'
import SolutionsImage from '../../assets/SOLUTIONS-IMAGE.png'
import CustomerSupport from '../../assets/CUSTOMER-SUPPORT.png'
import PaymentProcess from '../../assets/PAYMENT-PROCESS.png'
import Scheduling from '../../assets/SCHEDULING.png'
import FastResponses from '../../assets/FAST-RESPONSES.png'


function HomeScreen() {
    return (
        <div className="HomeScreen">
            <div className="background-image">
                <div className="mask">
                    <div className="welcome-container">
                        <div className="welcome-header">
                            <h1>Welcome to</h1>
                            <h1>Impact Pest Pros</h1>
                        </div>
                        <div className="welcome-body">
                            <h3>Your Premier Pest Solutions</h3>
                        </div>
                    </div>
                    <div className='welcome-buttons'>
                        <Button buttonStyle={"btn--common"} path={"/services"}>Services</Button>
                        <Button buttonStyle={"btn--common"} path={"/about-us"} >About Us</Button>
                    </div>
                </div>
            </div>
            <div className="offerings-container">
                <div className="general-header">
                    <h2>Offerings</h2>
                </div>
                <div className="offerings-elements">
                    <ImageElements image={ResidentialImage} description={"Residential"} style={"general"}/>
                    <ImageElements image={CommercialImage} description={"Commercial"} style={"general"}/>
                    <ImageElements image={EcoFriendlyImage} description={"Eco-Friendly"} style={"general"}/>
                    <ImageElements image={SolutionsImage} description={"Solutions"} style={"general"}/>
                </div>
            </div>
            <div className="rodent-control-container">
                <div className="general-header">
                    <h2>How rodent control works</h2>
                </div>
                <div className="rodent-control-elements">
                    <IconElement icon={"fa-solid fa-magnifying-glass"} description={"Rodent inspection"}
                                 quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how rodents are entering your home. "}/>
                    <IconElement icon={"fa-solid fa-user-shield"} description={"Exclusion"}
                                 quote={"First, we will remove any rodents from your home. Then, we will seal up entry points to keep them from re-entering your home. "}/>
                    <IconElement icon={"fa-solid fa-house-chimney"} description={"Annual inspection"}
                                 quote={"We will conduct an annual inspection each year for as long as you keep your plan. We will inspect previous entry point, as well as new vulnerabilities "}/>
                </div>
            </div>
            <div className="benefits-container">
                <div className="side-header">
                    <h2>Benefits</h2>
                </div>
                <div className="line"/>
                <div className="benefits-elements">
                    <ImageElements image={CustomerSupport} description={"Customer Support"} style={"white"}/>
                    <ImageElements image={PaymentProcess} description={"Payment Process"} style={"white"}/>
                    <ImageElements image={FastResponses} description={"Fast Responses"} style={"white"}/>
                    <ImageElements image={Scheduling} description={"Scheduling"} style={"white"}/>
                </div>
            </div>
            <div className="exclusion-container">
                <div className="general-header">
                    <h2>How bird exclusion works</h2>
                </div>
                <div className="exclusion-elements">
                    <ExclusionElement icon={"fa-solid fa-magnifying-glass"} description={"Initial Inspection"} quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine how to exclude the birds from gathering on the area, which will lead to a decrease in bird presence and droppings."}/>
                    <ExclusionElement icon={"fa-solid fa-user-shield"} description={"Exclusion"} quote={"First, we will remove any birds from the affected area. Then, we will seal off all entry points and landings to keep them from re-landing on the affected area. "}/>
                    <ExclusionElement icon={"fa-solid fa-house-chimney"} description={"Annual inspection"} quote={"We will conduct an annual inspection each year for as long as you keep your plan. We will inspect previously affected areas, as well as new potential vulnerabilities."}/>
                </div>
            </div>
            <div className="quote-container">
                <div className="white-header">
                    <h2>Get a FREE quote today</h2>
                </div>
                <div className="quote-button">
                    <Button buttonStyle={"btn--common"} path={"/contact-us"} target={"_blank"}>Free Quote</Button>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;