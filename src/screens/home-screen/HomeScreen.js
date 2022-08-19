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
import Integrity from '../../assets/INTEGRITY.png'


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
            <div className="background-image-mobile">
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
            <div className="rodent-control-container">
                <div className="general-header">
                    <h2>How Pest Control Works</h2>
                </div>
                <div className="pest-control-elements">
                    <ExclusionElement icon={"fa-solid fa-magnifying-glass"} description={"Initial Inspection"}
                                      quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how pests are impacting your home. "}/>
                    <ExclusionElement icon={"fa-solid fa-user-shield"} description={"Control"}
                                      quote={"First, we will remove any pests from your home. Then, we will perform either an interior or exterior service on your home. "}/>
                    <ExclusionElement icon={"fa-solid fa-house-chimney"} description={"Service Type"}
                                      quote={"We offer a monthly, bi-monthly, and quarterly service when it comes to pest control. Choose the plan that best fits your needs."}/>
                </div>
            </div>
            <div className="rodent-control-container-mobile">
                <div className="general-header-mobile">
                    <h2>How Pest Control Works</h2>
                </div>
                <div className="rodent-control-elements">
                    <ExclusionElement icon={"fa-solid fa-magnifying-glass"} description={"Initial Inspection"}
                                      quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how pests are impacting your home. "}/>
                </div>
                <div className="rodent-control-elements">
                    <ExclusionElement icon={"fa-solid fa-user-shield"} description={"Control"}
                                      quote={"First, we will remove any pests from your home. Then, we will perform either an interior or exterior service on your home. "}/>
                </div>
                <div className="rodent-control-elements">
                    <ExclusionElement icon={"fa-solid fa-house-chimney"} description={"Service Type"}
                                      quote={"We offer a monthly, bi-monthly, and quarterly service when it comes to pest control. Choose the plan that best fits your needs."}/>
                </div>
            </div>
            <div className="offerings-container">
                <div className="general-header">
                    <h2>Offerings</h2>
                </div>
                <div className="offerings-elements">
                    <ImageElements image={ResidentialImage} description={"Residential"} style={"general"}/>
                    <ImageElements image={CommercialImage} description={"Commercial"} style={"general"}/>
                    <ImageElements image={SolutionsImage} description={"Food & Beverage"} style={"general"}/>
                    <ImageElements image={EcoFriendlyImage} description={"Eco-Friendly"} style={"general"}/>
                </div>
            </div>

            <div className="offerings-container-mobile">
                <div className="general-header-mobile">
                    <h2>Offerings</h2>
                </div>
                <div className="offerings-elements-mobile">
                    <ImageElements image={ResidentialImage} description={"Residential"} style={"general"}/>
                    <ImageElements image={CommercialImage} description={"Commercial"} style={"general"}/>
                </div>
                <div className="offerings-elements-mobile">
                    <ImageElements image={EcoFriendlyImage} description={"Eco-Friendly"} style={"general"}/>
                    <ImageElements image={SolutionsImage} description={"Solutions"} style={"general"}/>
                </div>
            </div>

            <div className="rodent-control-container">
                <div className="general-header">
                    <h2>How Rodent Control Works</h2>
                </div>
                <div className="rodent-control-elements">
                    <ExclusionElement icon={"fa-solid fa-magnifying-glass"} description={"Rodent Inspection"}
                                 quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how rodents are entering your home. "}/>
                    <ExclusionElement icon={"fa-solid fa-user-shield"} description={"Exclusion"}
                                 quote={"First, we will remove any rodents from your home. Then, we will seal up entry points to keep them from re-entering your home. "}/>
                    <ExclusionElement icon={"fa-solid fa-house-chimney"} description={"Annual Inspection"}
                                 quote={"We will conduct an annual inspection each year for as long as you keep your plan. We will inspect previous entry point, as well as new vulnerabilities. "}/>
                </div>
            </div>
            <div className="rodent-control-container-mobile">
                <div className="general-header-mobile">
                    <h2>How Rodent Control Works</h2>
                </div>
                <div className="rodent-control-elements">
                    <ExclusionElement icon={"fa-solid fa-magnifying-glass"} description={"Rodent Inspection"}
                                 quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how rodents are entering your home. "}/>
                </div>
                <div className="rodent-control-elements">
                    <ExclusionElement icon={"fa-solid fa-user-shield"} description={"Exclusion"}
                                 quote={"First, we will remove any rodents from your home. Then, we will seal up entry points to keep them from re-entering your home. "}/>
                </div>
                <div className="rodent-control-elements">
                    <ExclusionElement icon={"fa-solid fa-house-chimney"} description={"Annual Inspection"}
                                 quote={"We will conduct an annual inspection each year for as long as you keep your plan. We will inspect previous entry point, as well as new vulnerabilities. "}/>
                </div>
            </div>

            <div className="benefits-container">
                <div className="margining-side">
                    <div className="side-header">
                        <h2 className="header-text-side">Benefits</h2>
                    </div>
                    <div className="line"/>
                </div>
                <div className="benefits-elements">
                    <ImageElements image={CustomerSupport} description={"Customer Service"} style={"white"}/>
                    <ImageElements image={PaymentProcess} description={"Payment Process"} style={"white"}/>
                    <ImageElements image={Integrity} description={"Company Integrity"} style={"white"}/>
                    <ImageElements image={Scheduling} description={"On-Time Services"} style={"white"}/>
                </div>
            </div>
            <div className="benefits-container-mobile">
                <div className="white-header-mobile">
                    <h2>Benefits</h2>
                </div>
                <div className="benefits-elements-mobile">
                    <ImageElements image={CustomerSupport} description={"Customer Support"} style={"white"}/>
                    <ImageElements image={PaymentProcess} description={"Payment Process"} style={"white"}/>
                </div>
                <div className="benefits-elements-mobile">
                    <ImageElements image={Integrity} description={"Company Integrity"} style={"white"}/>
                    <ImageElements image={Scheduling} description={"Scheduling"} style={"white"}/>
                </div>
            </div>

            <div className="exclusion-container">
                <div className="general-header">
                    <h2>How Bird Exclusion Works</h2>
                </div>
                <div className="exclusion-elements">
                    <ExclusionElement icon={"fa-solid fa-magnifying-glass"} description={"Initial Inspection"} quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine how to exclude the birds from gathering on the area, which will lead to a decrease in bird presence and droppings."}/>
                    <ExclusionElement icon={"fa-solid fa-user-shield"} description={"Exclusion"} quote={"First, we will remove any birds from the affected area. Then, we will seal off all entry points and landings to keep them from re-landing on the affected area. "}/>
                    <ExclusionElement icon={"fa-solid fa-house-chimney"} description={"Annual Inspection"} quote={"We will conduct an annual inspection each year for as long as you keep your plan. We will inspect previously affected areas, as well as new potential vulnerabilities."}/>
                </div>
            </div>
            <div className="exclusion-container-mobile">
                <div className="general-header-mobile">
                    <h2>How Bird Exclusion Works</h2>
                </div>
                <div className="exclusion-elements">
                    <ExclusionElement icon={"fa-solid fa-magnifying-glass"} description={"Initial Inspection"} quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine how to exclude the birds from gathering on the area, which will lead to a decrease in bird presence and droppings."}/>
                </div>
                <div className="exclusion-elements">
                    <ExclusionElement icon={"fa-solid fa-user-shield"} description={"Exclusion"} quote={"First, we will remove any birds from the affected area. Then, we will seal off all entry points and landings to keep them from re-landing on the affected area. "}/>
                </div>
                <div className="exclusion-elements">
                    <ExclusionElement icon={"fa-solid fa-house-chimney"} description={"Annual Inspection"} quote={"We will conduct an annual inspection each year for as long as you keep your plan. We will inspect previously affected areas, as well as new potential vulnerabilities."}/>
                </div>
            </div>

            <div className="quote-container">
                <div className="white-header">
                    <h2>Get a FREE Quote Today</h2>
                </div>
                <div className="quote-button">
                    <Button buttonStyle={"btn--common-2"} path={"/contact-us"} target={"_blank"}>Free Quote</Button>
                </div>
            </div>
            <div className="quote-container-mobile">
                <div className="white-header-mobile">
                    <h2>Get a FREE Quote Today</h2>
                </div>
                <div className="quote-button-mobile">
                    <Button buttonStyle={"btn--common-2"} path={"/contact-us"} target={"_blank"}>Free Quote</Button>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;