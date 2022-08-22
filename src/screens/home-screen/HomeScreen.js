import './HomeScreen.css';
import React from "react";

import {Navigation, Pagination, Scrollbar, A11y} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Button} from '../../components/Buttons'
import {ImageElements} from "../../components/ImageElements/ImageElements";
import {ExclusionElement} from "../../components/ExclusionElement/ExclusionElement";
import {CustomerReview} from "../../components/CustomerReview/CustomerReview"
import ResidentialImage from '../../assets/RESIDENTIAL-IMAGE.png'
import CommercialImage from '../../assets/COMMERCIAL-IMAGE.png'
import EcoFriendlyImage from '../../assets/ECO-FRIENDLY-IMAGE.png'
import SolutionsImage from '../../assets/SOLUTIONS-IMAGE.png'
import CustomerSupport from '../../assets/CUSTOMER-SUPPORT.png'
import PaymentProcess from '../../assets/PAYMENT-PROCESS.png'
import Scheduling from '../../assets/SCHEDULING.png'
import Integrity from '../../assets/INTEGRITY.png'
import BeesImage from '../../assets/BEE-ICON.png'
import BirdImage from '../../assets/BIRD-ICON.png'
import SpiderImage from '../../assets/SPIDER-ICON.png'
import RodentImage from '../../assets/RODENT-ICON.png'
import JoinUs from "../../icons/JOIN_US.png";
import {Link} from "react-router-dom";


function HomeScreen() {
    return (
        <div className="HomeScreen">
            <div className="call-today">
                <button className="contact-info-button" onClick={() => window.open( 'tel: 951-458-3966', '_blank')}>
                    <p className="call-today-text">Call Today! (951)458-3966</p>
                </button>
            </div>

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

            <div className="offerings-container">
                <div className="general-header">
                    <h2>Services We Offer</h2>
                </div>
                <div className="offerings-elements">
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={SpiderImage} description={"Pest Control"} style={"general"} link={'pest-control'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={BirdImage} description={"Bird Control"} style={"general"} link={'bird-control'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={RodentImage} description={"Rodent Control"} style={"general"} link={'rodent-control'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={BeesImage} description={"Bee Removal"} style={"general"} link={'bee-removal'}/>
                </div>
                <div className={'button-container-service'}>
                    <Link to={"/services"}>
                        <button className={'service-button-style'}>
                            <p className="service-button-text">Vew All Services</p>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="offerings-container-mobile">
                <div className="general-header-mobile">
                    <h2>Services We Offer</h2>
                </div>
                <div className="offerings-elements-mobile">
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={SpiderImage} description={"Pest Control"} style={"general"} link={'pest-control'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={BirdImage} description={"Bird Control"} style={"general"} link={'bird-control'}/>
                </div>
                <div className="offerings-elements-mobile">
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={RodentImage} description={"Rodent Control"} style={"general"} link={'rodent-control'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={BeesImage} description={"Bee Removal"} style={"general"} link={'bee-removal'}/>
                </div>
                <div className={'button-container-service'}>
                    <Link to={"/services"}>
                        <button className={'service-button-style'}>
                            <p className="service-button-text">Vew All Services</p>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="rodent-control-container">
                <div className="general-header">
                    <h2>How Our Services Work</h2>
                </div>
                <div className="pest-control-elements">
                    <ExclusionElement icon={"fa-solid fa-magnifying-glass"} description={"Initial Inspection"}
                                      quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how your home is being impacted. "}/>
                    <ExclusionElement icon={"fa-solid fa-calendar-check"} description={"Service Plan"}
                                      quote={"We offer a monthly, bi-monthly, and quarterly service when it comes to pest control. Choose the plan that best fits your needs."}/>
                    <ExclusionElement icon={"fa-solid fa-house-chimney"} description={"Pest Free Home"}
                                      quote={"Once you choose the service plan that best fits your needs, our technicians will service you home and be sure to leave and impact."}/>
                </div>
                <div className={'button-container-services'}>
                    <Link to={"/contact-us"}>
                        <button className={'service-button-style'}>
                            <p className="service-button-text">Get Started Today</p>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="rodent-control-container-mobile">
                <div className="general-header-mobile">
                    <h2>How Our Services Work</h2>
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
                    className={"swiper-element"}
                >
                    <SwiperSlide>
                        <ExclusionElement icon={"fa-solid fa-magnifying-glass"} description={"Initial Inspection"}
                                          quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how your home is being impacted. "}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ExclusionElement icon={"fa-solid fa-calendar-check"} description={"Service Plan"}
                                          quote={"We offer a monthly, bi-monthly, and quarterly service when it comes to pest control. Choose the plan that best fits your needs."}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ExclusionElement icon={"fa-solid fa-house-chimney"} description={"Pest Free Home"}
                                          quote={"Once you choose the service plan that best fits your needs, our technicians will service you home and be sure to leave and impact."}/>
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

            <div className="benefits-container">
                <div className="margining-side">
                    <div className="side-header">
                        <h2 className="header-text-side">Benefits</h2>
                    </div>
                    <div className="line"/>
                </div>
                <div className="benefits-elements">
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={CustomerSupport} description={"Customer Service"} style={"white"}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={PaymentProcess} description={"Payment Process"} style={"white"}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={Integrity} description={"Company Integrity"} style={"white"}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={Scheduling} description={"On-Time Services"} style={"white"}/>
                </div>
            </div>
            <div className="benefits-container-mobile">
                <div className="white-header-mobile">
                    <h2>Benefits</h2>
                </div>
                <div className="benefits-elements-mobile">
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={CustomerSupport} description={"Customer Support"} style={"white"}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={PaymentProcess} description={"Payment Process"} style={"white"}/>
                </div>
                <div className="benefits-elements-mobile">
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={Integrity} description={"Company Integrity"} style={"white"}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={Scheduling} description={"Scheduling"} style={"white"}/>
                </div>
            </div>

            <div className="review-container">
                <div className="general-header">
                    <h2>What Our Customers Are Saying</h2>
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className={"swiper-element-review"}
                >
                    <SwiperSlide className={"test-test"}>
                        <CustomerReview name={"Patty Esparza"} review={'"We contacted Impact Pest Pros for there services and I talked to the Business owner Andres. He was very honest and open about our immediate problem. He came to our home and took care of our issue. He answered all of our questions and was very knowledgeable! I would highly recommend him with any pest problem in your home."'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CustomerReview name={"McKayla Guzman"} review={'"They provide great service with clean and safe products. Having safe products was a big thing I wanted at my home because I have pets. Since having impact pest pros service my house the site of bugs and insects and greatly decreased. They spend good time at my home so they can make sure everything is done correctly. They are very accommodating if I have a problem they will do their best to get out as quick as possible."'}/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="review-container-mobile">
                <div className="general-header">
                    <h2>What Our Customers Are Saying</h2>
                </div>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className={"swiper-element-review"}
                >
                    <SwiperSlide className={"test-test"}>
                        <CustomerReview name={"Patty Esparza"} review={'"We contacted Impact Pest Pros for there services and I talked to the Business owner Andres. He was very honest and open about our immediate problem. He came to our home and took care of our issue. He answered all of our questions and was very knowledgeable! I would highly recommend him with any pest problem in your home."'}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CustomerReview name={"McKayla Guzman"} review={'"They provide great service with clean and safe products. Having safe products was a big thing I wanted at my home because I have pets. Since having impact pest pros service my house the site of bugs and insects and greatly decreased. They spend good time at my home so they can make sure everything is done correctly. They are very accommodating if I have a problem they will do their best to get out as quick as possible."'}/>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="quote-container">
                <div className="general-header">
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