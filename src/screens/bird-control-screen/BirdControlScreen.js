import './BirdControlScreen.css'
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "../../components/Buttons";
import ServiceCard from "../../components/ServiceCards/ServiceCard";
import {ExclusionElement} from "../../components/ExclusionElement/ExclusionElement";
import AdLogo from "../../assets/AD-LOGO.png";
import FaqElement from "../../components/FaqElement/FaqElement";


function BirdControlScreen() {
    const [faqs, setfaqs] = useState([
        {
            question: 'How do I get rid of birds?',
            answer: 'good',
            open: false
        },
        {
            question: 'How does bird exclusion work?',
            answer: 'megh',
            open: false
        },
        {
            question: 'Do you clean the area that the birds infected?',
            answer: 'meh',
            open: false
        },
        {
            question: 'What happens if birds come back?',
            answer: 'meh',
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
        <div className="bird-control">
            <div className="background-image-bird">
                    <div className="welcome-container-service">
                        <div className="service-tab">
                            <Link to={"/"}>
                                <button className="grey-button">
                                    <p>Home/</p>
                                </button>
                            </Link>
                            <Link to={"/pest-control"}>
                                <button className="current-button">
                                    <p>Bird Control</p>
                                </button>
                            </Link>
                        </div>
                        <div className="welcome-header">
                            <h1>Bird control</h1>
                        </div>
                        <div className="welcome-body-service">
                            <p>Your Impact Pest Pros professional knows how birds  behave in your area. They will inspect your home from top to bottom looking for signs of activity and entry points before customizing a plan to get them out and keep them from coming back.</p>
                        </div>
                    <div className='welcome-buttons-bird'>
                        <Button buttonStyle={"btn--services-grey"} path={"/contact-us"}>Free Quote</Button>
                    </div>
                    <div className="bird-container">
                        <div className="left-bird-container">
                            <div className="top-left-bird">
                                <i className="fa-solid fa-dove"></i>
                            </div>
                            <div className="bottom-left-bird">
                                <i className="fa-solid fa-dove"></i>
                            </div>
                        </div>
                        <div className="right-bird-container">
                            <div className="top-left-bird">
                                <i className="fa-solid fa-dove"></i>
                            </div>
                            <div className="bottom-left-bird">
                                <i className="fa-solid fa-dove"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-ad-header">
                <div className="general-header">
                    <h2>Get started with bird control</h2>
                </div>
                <div className="card-container">
                    <ServiceCard name={"Bi-Monthly Bird Control"} description1={"Initial interior and exterior inspection and treatment discover any vulnerabilities and identify them"} description2={"Ongoing exterior treatments scheduled bi-monthly"} description3={"Protection that is guaranteed for as long as you keep your plan."} image={"bi-monthly-pest"}/>
                    <ServiceCard name={"One-time Bird Control"} description1={"One single bird control service includes a comprehensive exterior inspection and treatment"} description2={"Our technician will find the affected area and work to prevent the problem"} description3={"If birds come back to initial area within 30 days we will come back at no additional cost"} image={"one-time-pest"}/>
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
            <div className="internal-ad">
                <div className="image-container">
                    <div>
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
        </div>
    );
}

export default BirdControlScreen;