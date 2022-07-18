import './BeeRemovalScreen.css'
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "../../components/Buttons";
import ServiceCard from "../../components/ServiceCards/ServiceCard";
import {ExclusionElement} from "../../components/ExclusionElement/ExclusionElement";
import AdLogo from "../../assets/AD-LOGO.png";
import FaqElement from "../../components/FaqElement/FaqElement";
import {IconElement} from "../../components/IconElement/IconElement";


function BeeRemovalScreen() {
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
                                <p>Bee Removal</p>
                            </button>
                        </Link>
                    </div>
                    <div className="welcome-header">
                        <h1>Bee Removal</h1>
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
                                <i className="fa-solid fa-bee"></i>
                            </div>
                            <div className="bottom-left-bird">
                                <i className="fa-solid fa-bee"></i>
                            </div>
                        </div>
                        <div className="right-bird-container">
                            <div className="top-left-bird">
                                <i className="fa-solid fa-bee"></i>
                            </div>
                            <div className="bottom-left-bird">
                                <i className="fa-solid fa-bee"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-ad-header">
                <div className="general-header">
                    <h2>Get started with bee removal</h2>
                </div>
                <div className="card-container">
                    <ServiceCard name={"One-time Bee Job"} description1={"One single bee removal service includes a comprehensive exterior inspection and treatment"} description2={"Our technician will find the affected area and work to remove the problem"} description3={"If bees come back within 30 days we will come back at no additional cost"} image={"one-time-pest"}/>
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
                            <p>The Impact Pest Guarantee means you can relax knowing we'll impact your bee problem and keep it impacted for as long as you keep your plan. If they do return within the covered date, we will come back -- at no additional cost to you.</p>
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
            <div className="rodent-control-container">
                <div className="general-header">
                    <h2>How bee removal works</h2>
                </div>
                <div className="rodent-control-elements">
                    <IconElement icon={"fa-solid fa-magnifying-glass"} description={"Initial inspection"}
                                 quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how rodents are entering your home. "}/>
                    <IconElement icon={"fa-solid fa-xmark"} description={"Removal"}
                                 quote={"First, we will remove any bees from your home. Then, we will seal up affected areas to keep them from re-entering your home. "}/>
                    <IconElement icon={"fa-solid fa-hand"} description={"Prevention"}
                                 quote={"We will seal up the affected areas, in order to prevent bees from re-entering. Will also remove any hives at additional cost."}/>
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

export default BeeRemovalScreen;