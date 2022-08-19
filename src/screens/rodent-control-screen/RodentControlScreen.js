import './RodentControlScreen.css'
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "../../components/Buttons";
import ServiceCard from "../../components/ServiceCards/ServiceCard";
import {IconElement} from "../../components/IconElement/IconElement";
import AdLogo from "../../assets/AD-LOGO.png";
import FaqElement from "../../components/FaqElement/FaqElement";


function RodentControlScreen() {
    const [faqs, setfaqs] = useState([
        {
            question: 'How do I prevent rodents from entering my home?',
            answer: 'As a home owner some methods include, identifying any exterior holes or entry pointer around your home. Installing rodent exclusions such as wire mesh over existing holes to prevent entry. This will help prevent entry, but if you already have an infestation give us a call to come get rid of your rodents.',
            open: false
        },
        {
            question: 'What are the best baits for mice or rats?',
            answer: 'Our team has tested many different baits, and we have noticed that baits from your local hardware store are not effective. So we suggest your hire a professional in order to get rid of rodents.',
            open: false
        },
        {
            question: 'How long does it take to get rid of rodents?',
            answer: 'The time depends on the scale of the infestation. Regarding the low level infestations it takes 2-4 weeks.',
            open: false
        }
    ])

    const toggleFaq = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            }else {
                faq.open = false;
            }

            return  faq;
        }))
    }
    return(
        <div className="rodent-control">
            <div className="background-image-rodent">
                <div className="mask">
                    <div className="welcome-container-service">
                        <div className="service-tab">
                            <Link to={"/"}>
                                <button className="grey-button">
                                    <p>Home/</p>
                                </button>
                            </Link>
                            <Link to={"/pest-control"}>
                                <button className="current-button">
                                    <p>Rodent Control</p>
                                </button>
                            </Link>
                        </div>
                        <div className="welcome-header">
                            <h1>Rodent Control</h1>
                        </div>
                        <div className="welcome-body-service">
                            <p>Your Impact Pest Pros professional knows how rats, mice and other rodents behave in your area. They will inspect your home from top to bottom looking for signs of activity and entry points before customizing a plan to get them out and keep them from coming back.</p>
                        </div>
                    </div>
                    <div className='welcome-buttons'>
                        <Button buttonStyle={"btn--services"} path={"/services"}>Free Quote</Button>
                    </div>
                </div>
            </div>
            <div className="service-ad-header">
                <div className="general-header">
                    <h2>Get Started With Rodent Control</h2>
                </div>
                <div className="card-container">
                    <ServiceCard name={"Bi-Monthly Rodent Control"} description1={"Initial interior and exterior inspection and treatment discover any vulnerabilities and identify them"} description2={"Ongoing exterior treatments scheduled bi-monthly"} description3={"Protection that is guaranteed for as long as you keep your plan."} image={"bi-monthly-rodent"}/>
                    <ServiceCard name={"One-Time Rodent Control"} description1={"One single pest control service includes a comprehensive interior and exterior inspection and treatment"} description2={"If pests come back within 30 days we will come back at no additional cost"} description3={"Perfect service before selling your home"} image={"one-time-rodent"}/>
                </div>
            </div>
            <div className="service-ad-header-mobile">
                <div className="general-header">
                    <h2>Get Started With Rodent Control</h2>
                </div>
                <div className="mobile-container">
                    <div className="card-container-mobile">
                        <ServiceCard name={"Bi-Monthly Rodent Control"} description1={"Initial interior and exterior inspection and treatment discover any vulnerabilities and identify them"} description2={"Ongoing exterior treatments scheduled bi-monthly"} description3={"Protection that is guaranteed for as long as you keep your plan."} image={"bi-monthly-rodent"}/>
                        <div className="space"/>
                        <ServiceCard name={"One-Time Rodent Control"} description1={"One single pest control service includes a comprehensive interior and exterior inspection and treatment"} description2={"If pests come back within 30 days we will come back at no additional cost"} description3={"Perfect service before selling your home"} image={"one-time-rodent"}/>
                    </div>
                </div>
            </div>
            <div className="rodent-control-container">
                <div className="general-header">
                    <h2>How Rodent Control Works</h2>
                </div>
                <div className="rodent-control-elements">
                    <IconElement icon={"fa-solid fa-magnifying-glass"} description={"Rodent Inspection"}
                                 quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how rodents are entering your home. "}/>
                    <IconElement icon={"fa-solid fa-user-shield"} description={"Exclusion"}
                                 quote={"First, we will remove any rodents from your home. Then, we will seal up entry points to keep them from re-entering your home. "}/>
                    <IconElement icon={"fa-solid fa-house-chimney"} description={"Annual Inspection"}
                                 quote={"We will conduct an annual inspection each year for as long as you keep your plan. We will inspect previous entry points, as well as new vulnerabilities "}/>
                </div>
            </div>
            <div className="monthly-service-container-mobile">
                <div className="general-header-mobile">
                    <h2>How Rodent Control Works</h2>
                </div>
                <div className="rodent-control-elements">
                    <IconElement icon={"fa-solid fa-magnifying-glass"} description={"Rodent Inspection"}
                                 quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how rodents are entering your home. "}/>
                </div>
                <div className="rodent-control-elements">
                    <IconElement icon={"fa-solid fa-user-shield"} description={"Exclusion"}
                                 quote={"First, we will remove any rodents from your home. Then, we will seal up entry points to keep them from re-entering your home. "}/>
                </div>
                <div className="rodent-control-elements">
                    <IconElement icon={"fa-solid fa-house-chimney"} description={"Annual Inspection"}
                                 quote={"We will conduct an annual inspection each year for as long as you keep your plan. We will inspect previous entry points, as well as new vulnerabilities "}/>
                </div>
            </div>

            <div className="internal-ad">
                <div className="image-container">
                    <div className="logo-container">
                        <img src={AdLogo} className="ad-logo"/>
                    </div>
                    <div className="vertical-line"/>
                    <div>
                        <div className="service-ad-text">
                            <p>The Impact Pest Guarantee means you can relax knowing we'll impact your rodent and wildlife problem and keep it impacted for as long as you keep your plan. If they do return, we will come back -- at no additional cost to you.</p>
                        </div>
                        <div>
                            <Link to={"/contact-us"}>
                                <button className="service-ad-button">
                                    <p>Free Quote</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq-section">
                <div className="faq-items">
                    <div className="general-header">
                        <h2>Frequently Asked Questions</h2>
                        <div className="faq-line"/>
                    </div>
                </div>
                <div className="faq-container">
                    {faqs.map((faq, i) => (
                        <FaqElement faq={faq} index={i} toggleFaq={toggleFaq}/>
                    ))}
                </div>

            </div>
            <div className="faq-section-mobile">
                <div className="faq-items">
                    <div className="general-header-mobile">
                        <h2>Frequently Asked Questions</h2>
                        <div className="faq-line"/>
                    </div>
                </div>
                <div className="faq-container">
                    {faqs.map((faq, i) => (
                        <FaqElement faq={faq} index={i} toggleFaq={toggleFaq}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RodentControlScreen;