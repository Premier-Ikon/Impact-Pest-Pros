import './PestControlScreen.css'
import React, {useState} from "react";
import {Button} from "../../components/Buttons";
import {Link} from "react-router-dom";
import ServiceCard from "../../components/ServiceCards/ServiceCard";
import AdLogo from "../../assets/AD-LOGO.png"
import {IconElement} from "../../components/IconElement/IconElement";
import FaqElement from "../../components/FaqElement/FaqElement";


function PestControlScreen() {
    const [faqs, setfaqs] = useState([
        {
            question: 'How often are pest control treatments provided?',
            answer: 'We offer Monthly, Bi-Monthly, Quarterly, and Special Services to our customers.',
            open: false
        },
        {
            question: 'What should I do if I have insects in my home?',
            answer: 'If you are able to gather some of the insects and put them in a bag and then give us a call so that way we can determine how to ID your problem.',
            open: false
        },
        {
            question: 'How does pest control work?',
            answer: 'Service plan that keeps insects at bay from impacting your home. Plus the prevention of pests entering your personal space.',
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
        <div className="pest-control">
            <div className="background-image-pest">
                <div className="mask">
                    <div className="welcome-container-service">
                        <div className="service-tab">
                            <Link to={"/services"}>
                                <button className="grey-button">
                                    <p>Home/</p>
                                </button>
                            </Link>
                            <Link to={"/pest-control"}>
                                <button className="current-button">
                                    <p>Pest Control</p>
                                </button>
                            </Link>
                        </div>
                        <div className="welcome-header">
                            <h1>Pest Control</h1>
                        </div>
                        <div className="welcome-body-service">
                            <p>Our Impact Pest Pros professionals know your area because that’s where they live and serve.
                                They are expertly trained on the top industry products and processes to fix your pest problem
                                and keep it from coming back.
                            </p>
                        </div>
                    </div>
                    <div className='welcome-buttons'>
                        <Button buttonStyle={"btn--services"} path={"/contact-us"}>Free Quote</Button>
                    </div>
                </div>
            </div>

            <div className="service-ad-header">
                <div className="general-header">
                    <h2>Get Started With Pest Control</h2>
                </div>
                <div className="card-container">
                    <ServiceCard name={"Monthly Pest Control"} description1={"Initial interior and exterior inspection and treatment"} description2={"Ongoing exterior treatments scheduled monthly"} description3={"Guaranteed protection for as long as you keep your plan, if pests come back during treatments so will we"} image={"monthly-pest"}/>
                    <ServiceCard name={"Bi-Monthly Pest Control"} description1={"Initial interior and exterior inspection and treatment discover any vulnerabilities and identify them"} description2={"Ongoing exterior treatments scheduled bi-monthly"} description3={"Protection that is guaranteed for as long as you keep your plan"} image={"bi-monthly-pest"}/>
                    <ServiceCard name={"One-time Pest Control"} description1={"One single pest control service includes a comprehensive interior and exterior inspection and treatment"} description2={"If pests come back within 30 days we will come back at no additional cost"} description3={"Perfect service before selling your home"} image={"one-time-pest"}/>
                </div>
            </div>
            <div className="service-ad-header-mobile">
                <div className="general-header">
                    <h2>Get Started With Pest Control</h2>
                </div>
                <div className="mobile-container">
                    <div className="card-container-mobile">
                        <ServiceCard name={"Monthly Pest Control"} description1={"Initial interior and exterior inspection and treatment"} description2={"Ongoing exterior treatments scheduled monthly"} description3={"Guaranteed protection for as long as you keep your plan, if pests come back during treatments so will we"} image={"monthly-pest"}/>
                        <div className="space"/>
                        <ServiceCard name={"Bi-Monthly Pest Control"} description1={"Initial interior and exterior inspection and treatment discover any vulnerabilities and identify them"} description2={"Ongoing exterior treatments scheduled bi-monthly"} description3={"Protection that is guaranteed for as long as you keep your plan"} image={"bi-monthly-pest"}/>
                        <div className="space"/>
                        <ServiceCard name={"One-time Pest Control"} description1={"One single pest control service includes a comprehensive interior and exterior inspection and treatment"} description2={"If pests come back within 30 days we will come back at no additional cost"} description3={"Perfect service before selling your home"} image={"one-time-pest"}/>
                    </div>
                </div>
            </div>

            <div className="internal-ad">
                <div className="image-container">
                    <div className="logo-container">
                        <img src={AdLogo} className="ad-logo" alt={"ad-logo"}/>
                    </div>
                    <div className="vertical-line"/>
                    <div className="lower-container">
                        <div className="service-ad-text">
                            <p className="test">Insects are swarming nationwide and your home needs protection. Luckily, our pest protection plans start as low as $69/mo. Click below to get your FREE quote and ensure your home is protected from pests in order to make your home happy and clean.</p>
                        </div>
                        <div className="internal-ad-button">
                            <Link to={"/contact-us"}>
                                <button className="service-ad-button">
                                    <p>Free Quote</p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>



            <div className="monthly-service-container">
                <div className="general-header">
                    <h2>How Monthly Pest Control Works</h2>
                </div>
                <div className="rodent-control-elements">
                    <IconElement icon={"fa-solid fa-magnifying-glass"} description={"Initial Service Visit"}
                                 quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how rodents are entering your home"}/>
                    <IconElement icon={"fa-solid fa-user-shield"} description={"Year-Round Control"}
                                 quote={"We’ll come out to inspect and service your home with regularly scheduled treatments to reinforce your exterior barrier. This will continue as long as you keep your plan"}/>
                    <IconElement icon={"fa-solid fa-house-chimney"} description={"Guaranteed Satisfaction"}
                                 quote={"If pests come back between treatments, so will we – at no additional cost to you. That is the Impact Pest Guarantee"}/>
                </div>
            </div>
            <div className="monthly-service-container-mobile">
                <div className="general-header-mobile">
                    <h2>How Monthly Pest Control Works</h2>
                </div>
                <div className="rodent-control-elements">
                    <IconElement icon={"fa-solid fa-magnifying-glass"} description={"Initial Service Visit"}
                                 quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how rodents are entering your home"}/>
                </div>
                <div className="rodent-control-elements">
                    <IconElement icon={"fa-solid fa-user-shield"} description={"Year-Round Control"}
                                 quote={"We’ll come out to inspect and service your home with regularly scheduled treatments to reinforce your exterior barrier. This will continue as long as you keep your plan"}/>
                </div>
                <div className="rodent-control-elements">
                    <IconElement icon={"fa-solid fa-house-chimney"} description={"Protection & Control"}
                                 quote={"If pests come back between treatments, so will we – at no additional cost to you. That is the Impact Pest Guarantee"}/>
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

export default PestControlScreen;