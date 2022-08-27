import './BirdControlScreen.css'
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "../../components/Buttons";
import ServiceCard from "../../components/ServiceCards/ServiceCard";
import {ExclusionElement} from "../../components/ExclusionElement/ExclusionElement";
import AdLogo from "../../assets/AD-LOGO.png";
import FaqElement from "../../components/FaqElement/FaqElement";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";


function BirdControlScreen() {
    const [faqs, setfaqs] = useState([
        {
            question: 'How do I get rid of birds?',
            answer: 'Most home owners cannot get rid of a bird infestation without the assistance of a trained professional. In most cases within bird exclusions, spikes and pucks are needed.',
            open: false
        },
        {
            question: 'How does bird exclusion work?',
            answer: 'Our technician will come out in order to inspect the infestation. Once it is inspected our technician will develop a course of action. This would contain the process in order to remove and prevent any future infestations.',
            open: false
        },
        {
            question: 'Do you clean the area that the birds infected?',
            answer: 'Our technicians will do a thorough walk-through after they have removed the birds, in order to ensure the impacted area has been cleaned and treated.',
            open: false
        },
        {
            question: 'What happens if birds come back?',
            answer: 'If the bids comeback to the same location within 30 days we will come back out and identify a new course of action at no additional cost.',
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
                        <div className="welcome-header">
                            <h1>Bird Control</h1>
                        </div>
                        <div className="welcome-body-service">
                            <p>Your Impact Pest Pros professional knows how birds  behave in your area. They will inspect your home from top to bottom looking for signs of activity and entry points before customizing a plan to get them out and keep them from coming back.</p>
                        </div>
                    <div className='welcome-buttons-bird'>
                        <Button buttonStyle={"btn--services-grey"} path={"/contact-us"}>Free Quote</Button>
                    </div>
                    {/*<div className="bird-container">*/}
                    {/*    <div className="left-bird-container">*/}
                    {/*        <div className="top-left-bird">*/}
                    {/*            <i className="fa-solid fa-dove"></i>*/}
                    {/*        </div>*/}
                    {/*        <div className="bottom-left-bird">*/}
                    {/*            <i className="fa-solid fa-dove"></i>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="right-bird-container">*/}
                    {/*        <div className="top-left-bird">*/}
                    {/*            <i className="fa-solid fa-dove"></i>*/}
                    {/*        </div>*/}
                    {/*        <div className="bottom-left-bird">*/}
                    {/*            <i className="fa-solid fa-dove"></i>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className="service-ad-header">
                <div className="general-header">
                    <h2>Get Started With Bird Control</h2>
                </div>
                <div className="card-container">
                    <ServiceCard name={"Bi-Monthly Bird Control"} description1={"Initial interior and exterior inspection and treatment discover any vulnerabilities and identify them"} description2={"Ongoing exterior treatments scheduled bi-monthly"} description3={"Protection that is guaranteed for as long as you keep your plan."} image={"bi-monthly-pest"}/>
                    <ServiceCard name={"One-time Bird Control"} description1={"One single bird control service includes a comprehensive exterior inspection and treatment"} description2={"Our technician will find the affected area and work to prevent the problem"} description3={"If birds come back to initial area within 30 days we will come back at no additional cost"} image={"one-time-pest"}/>
                </div>
            </div>
            <div className="service-ad-header-mobile">
                <div className="rodent-control-container-mobile">
                    <div className="general-header-mobile">
                        <h2>Get Started With Bird Control</h2>
                    </div>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={100}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className={"swiper-element-services"}
                    >
                        <SwiperSlide className="test-test">
                            <ServiceCard name={"Bi-Monthly Bird Control"} description1={"Initial interior and exterior inspection and treatment discover any vulnerabilities and identify them"} description2={"Ongoing exterior treatments scheduled bi-monthly"} description3={"Protection that is guaranteed for as long as you keep your plan."} image={"bi-monthly-pest"}/>
                        </SwiperSlide>
                        <SwiperSlide className="test-test">
                            <ServiceCard name={"One-time Bird Control"} description1={"One single bird control service includes a comprehensive exterior inspection and treatment"} description2={"Our technician will find the affected area and work to prevent the problem"} description3={"If birds come back to initial area within 30 days we will come back at no additional cost"} image={"one-time-pest"}/>
                        </SwiperSlide>
                    </Swiper>
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
                <div className={'button-container-services'}>
                    <Link to={"/contact-us"}>
                        <button className={'service-button-style'}>
                            <p className="service-button-text">Get Started Today</p>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="exclusion-container-mobile">
                <div className="general-header-mobile">
                    <h2>How Bird Exclusion Works</h2>
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={100}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className={"swiper-element-tall"}
                >
                    <SwiperSlide>
                        <ExclusionElement icon={"fa-solid fa-magnifying-glass"} description={"Initial Inspection"} quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine how to exclude the birds from gathering on the area, which will lead to a decrease in bird presence and droppings."}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ExclusionElement icon={"fa-solid fa-user-shield"} description={"Exclusion"} quote={"First, we will remove any birds from the affected area. Then, we will seal off all entry points and landings to keep them from re-landing on the initially affected area."}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ExclusionElement icon={"fa-solid fa-house-chimney"} description={"Annual Inspection"} quote={"We will conduct an annual inspection each year for as long as you keep your plan. We will inspect previously affected areas, as well as new potential vulnerabilities."}/>
                    </SwiperSlide>
                </Swiper>
                <div className={'button-container-service'}>
                    <Link to={"/contact-us"}>
                        <button className={'service-button-style'}>
                            <p className="service-button-text">Get Started Today</p>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="internal-ad">
                <div className="image-container">
                    <div className="logo-container">
                        <img src={AdLogo} className="ad-logo" alt={"bird"}/>
                    </div>
                    <div className="vertical-line"/>
                    <div>
                        <div className="service-ad-text">
                            <p>The Impact Pest Guarantee means you can relax knowing we'll impact your rodent and wildlife problem and keep it impacted for as long as you keep your plan. If they do return, we will come back -- at no additional cost to you.</p>
                        </div>
                        <div>
                            <Link to={"/contact-us"}>
                                <button className="service-ad-button">
                                    <p className="service-button-text">Free Quote</p>
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

export default BirdControlScreen;