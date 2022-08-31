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
import Integrity from '../../assets/INTEGRITY.png'
import BeesImage from '../../assets/BEE-ICON.png'
import BirdImage from '../../assets/BIRD-ICON.png'
import SpiderImage from '../../assets/SPIDER-ICON.png'
import RodentImage from '../../assets/RODENT-ICON.png'
import {Link} from "react-router-dom";
import AdLogo from "../../assets/AD-LOGO.png";
import ProtectFamily from "../../assets/PROTECT-FAMILY.png"
import ProtectFriends from "../../assets/PROTECT-FRIENDS.png"
import ProtectHome from "../../assets/PROTECT-HOME.png"
import ProtectPets from "../../assets/PROTECT-PETS.png"
import OnTime from "../../assets/ON-TIME.png"
import FamilyOwned from "../../assets/FAMILY-OWNED.png"
import CustomerService from "../../assets/CUSTOMER-SERVICE.png"





function HomeScreen() {
    return (
        <div className="HomeScreen">
            <div className="call-today">
                <button className="contact-info-button" onClick={() => window.open( 'tel: 951-458-3966', '_self')}>
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
                            <p className="service-button-text">View All Services</p>
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
                            <p className="service-button-text">View All Services</p>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="benefits-container">

                <div className="general-header-white">
                    <h2 className="header-text-side">Why You Need Pest Control</h2>
                </div>
                <div className="align-center">
                    <div className="horizontal-line"/>
                </div>
                <div className="benefits-elements">
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={ProtectFamily} description={"Protect Your Family"} style={"white"} link={'contact-us'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={ProtectPets} description={"Protect Your Pets"} style={"white"} link={'contact-us'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={ProtectHome} description={"Protect Your Home"} style={"white"} link={'contact-us'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={ProtectFriends} description={"Protect Your Friends"} style={"white"} link={'contact-us'}/>
                </div>
            </div>
            <div className="benefits-container-mobile">
                <div className="white-header-mobile">
                    <h2 className="pest-control-header">Why You Need Pest Control</h2>
                </div>
                <div className="align-center">
                    <div className="horizontal-line"/>
                </div>
                <div className="benefits-elements-mobile">
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={ProtectFamily} description={"Protect Your Family"} style={"white"} link={'contact-us'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={ProtectPets} description={"Protect Your Pets"} style={"white"} link={'contact-us'}/>
                </div>
                <div className="benefits-elements-mobile">
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={ProtectHome} description={"Protect Your Home"} style={"white"} link={'contact-us'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={ProtectFriends} description={"Protect Your Friends"} style={"white"} link={'contact-us'}/>
                </div>
            </div>

            <div className="rodent-control-container">
                <div className="general-header">
                    <h2>How Our Services Work</h2>
                </div>
                <div className="pest-control-elements">
                    <ExclusionElement icon={"fa-solid fa-magnifying-glass"} description={"Initial Inspection"}
                                      quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how your home is being effected. "}/>
                    <ExclusionElement icon={"fa-solid fa-calendar-check"} description={"Service Plan"}
                                      quote={"We offer a monthly, bi-monthly, and quarterly service plan when it comes to pest control. Choose the plan that best fits your needs."}/>
                    <ExclusionElement icon={"fa-solid fa-house-chimney"} description={"Pest Free Home"}
                                      quote={"Once you choose the service plan that best fits your needs, our technician will service you home and be sure to leave and impact."}/>
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
                                          quote={"Your Impact Pest Pros professional will conduct a thorough inspection to determine where and how your home is being effected. "}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ExclusionElement icon={"fa-solid fa-calendar-check"} description={"Service Plan"}
                                          quote={"We offer a monthly, bi-monthly, and quarterly service plan when it comes to pest control. Choose the plan that best fits your needs."}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ExclusionElement icon={"fa-solid fa-house-chimney"} description={"Pest Free Home"}
                                          quote={"Once you choose the service plan that best fits your needs, our technician will service you home and be sure to leave and impact."}/>
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

                <div className="general-header-white">
                    <h2 className="header-text-side">Why Choose Impact Pest Pros</h2>
                </div>
                <div className="align-center">
                    <div className="horizontal-line"/>
                </div>
                <div className="benefits-elements">
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={FamilyOwned} description={"Family Owned"} style={"white"} link={'contact-us'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={Integrity} description={"Company Integrity"} style={"white"} link={'contact-us'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={CustomerService} description={"Customer Service"} style={"white"} link={'contact-us'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={OnTime} description={"On Time Services"} style={"white"} link={'contact-us'}/>
                </div>
            </div>
            <div className="benefits-container-mobile">
                <div className="white-header-mobile">
                    <h2 className="pest-control-header">Why Choose Impact Pest Pros</h2>
                </div>
                <div className="align-center">
                    <div className="horizontal-line"/>
                </div>
                <div className="benefits-elements-mobile">
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={FamilyOwned} description={"Family Owned"} style={"white"} link={'contact-us'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={Integrity} description={"Company Integrity"} style={"white"} link={'contact-us'}/>
                </div>
                <div className="benefits-elements-mobile">
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={CustomerService} description={"Customer Service"} style={"white"} link={'contact-us'}/>
                    {/* eslint-disable-next-line react/style-prop-object */}
                    <ImageElements image={OnTime} description={"On Time Services"} style={"white"} link={'contact-us'}/>
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
                            <p className="test">Insects are swarming nationwide and your home needs protection. Luckily, our pest protection plans start as low as $23/mo. Click below to get your <b>FREE</b> quote and ensure your home is protected from pests in order to make your home happy and clean.</p>
                        </div>
                        <div className="internal-ad-button">
                            <Link to={"/contact-us"}>
                                <button className="service-ad-button">
                                    <p className="service-button-text">Free Quote</p>
                                </button>
                            </Link>
                        </div>
                    </div>
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
                    <div className="test-test">
                        <SwiperSlide className="test-test">
                            <CustomerReview name={"McKayla G."} review={'"They provide great service with clean and safe products. Having safe products was a big thing I wanted at my home because I have pets. Since having impact pest pros service my house the site of bugs and insects and greatly decreased. They spend good time at my home so they can make sure everything is done correctly. They are very accommodating if I have a problem they will do their best to get out as quick as possible."'}/>
                        </SwiperSlide>
                        <SwiperSlide className="test-test">
                            <CustomerReview name={"Patty E."} review={'"We contacted Impact Pest Pros for there services and I talked to the Business owner Andres. He was very honest and open about our immediate problem. He came to our home and took care of our issue. He answered all of our questions and was very knowledgeable! I would highly recommend him with any pest problem in your home."'}/>
                        </SwiperSlide>
                        <SwiperSlide className="test-test">
                            <CustomerReview name={"Ferney E."} review={'"We have been very pleased with Impact Pest Pros, ever since we\'ve used them we no longer have random insects coming inside. We are on 5 acres of land and have plenty of wild life. They are timely and professional, I will continue with there service .\n' +
                                '\n' +
                                'Andres is very knowledgeable and is very thorough with his work."'}/>
                        </SwiperSlide>
                        <SwiperSlide className="test-test">
                            <CustomerReview name={"Jessica G."} review={'"Andres does a wonderful job at keeping the pests away. We had a ton of spiders and a bird problem on our solar panels and he took care of both and I couldn\'t be happier."'}/>
                        </SwiperSlide>
                        <SwiperSlide className="test-test">
                            <CustomerReview name={"Felipe M."} review={'"We have had trouble with ants. Andres came to the rescue to help with the ants. Now we have them under control. Thanks Impact pest control."'}/>
                        </SwiperSlide>
                        <SwiperSlide className="test-test">
                            <CustomerReview name={"Rob C."} review={'"Andres and Impact Pest Pros are fantastic. I use Andres for two of our properties, Including an Airbnb. He\'s gone above and beyond to make sure that everything is perfect. I\'ve gone through quite a few pest control companies, and Andres is the best. My highest recommendation!"'}/>
                        </SwiperSlide>
                        <SwiperSlide className="test-test">
                            <CustomerReview name={"Michele R."} review={'"If your looking for a great pest control company this is your guy!  I\'ve been using his services for over a year now and have been completely satisfied!  I would recommend this company to anyone!"'}/>
                        </SwiperSlide>
                    </div>
                </Swiper>
                <div className={'button-container-service'}>
                    <Link to={"/contact-us"}>
                        <button className={'service-button-style'}>
                            <p className="service-button-text">Join Today</p>
                        </button>
                    </Link>
                </div>
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
                    <SwiperSlide className="test-test">
                        <CustomerReview name={"McKayla G."} review={'"They provide great service with clean and safe products. Having safe products was a big thing I wanted at my home because I have pets. Since having impact pest pros service my house the site of bugs and insects and greatly decreased. They spend good time at my home so they can make sure everything is done correctly. They are very accommodating if I have a problem they will do their best to get out as quick as possible."'}/>
                    </SwiperSlide>
                    <SwiperSlide className="test-test">
                        <CustomerReview name={"Patty E."} review={'"We contacted Impact Pest Pros for there services and I talked to the Business owner Andres. He was very honest and open about our immediate problem. He came to our home and took care of our issue. He answered all of our questions and was very knowledgeable! I would highly recommend him with any pest problem in your home."'}/>
                    </SwiperSlide>
                    <SwiperSlide className="test-test">
                        <CustomerReview name={"Ferney E."} review={'"We have been very pleased with Impact Pest Pros, ever since we\'ve used them we no longer have random insects coming inside .We are on 5 acres of land and have plenty of wild life. They are timely and professional, I will continue with there service .\n' +
                            '\n' +
                            'Andres is very knowledgeable and is very thorough with his work."'}/>
                    </SwiperSlide>
                    <SwiperSlide className="test-test">
                        <CustomerReview name={"Jessica G."} review={'"Andres does a wonderful job at keeping the pests away. We had a ton of spiders and a bird problem on our solar panels and he took care of both and I couldn\'t be happier."'}/>
                    </SwiperSlide>
                    <SwiperSlide className="test-test">
                        <CustomerReview name={"Felipe M."} review={'"We have had trouble with ants.Andres came to the rescue to help with the ants.Now we have them under control. Thanks Impact pest control."'}/>
                    </SwiperSlide>
                    <SwiperSlide className="test-test">
                        <CustomerReview name={"Rob C."} review={'"Andres and Impact Pest Pros are fantastic. I use Andres for two of our properties, Including an Airbnb. He\'s gone above and beyond to make sure that everything is perfect. I\'ve gone through quite a few pest control companies, and Andres is the best. My highest recommendation!"'}/>
                    </SwiperSlide>
                    <SwiperSlide className="test-test">
                        <CustomerReview name={"Michele R."} review={'"If your looking for a great pest control company this is your guy!  I\'ve been using his services for over a year now and have been completely satisfied!  I would recommend this company to anyone!"'}/>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className="quote-container">
                <div className="general-header-white">
                    <h2>Get a FREE Quote Today</h2>
                </div>
                <div className={'button-container-service'}>
                    <Link to={"/contact-us"}>
                        <button className={'free-quote-button-style'}>
                            <p className="free-quote-button-text">Free Quote</p>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="quote-container-mobile">
                <div className="white-header-mobile">
                    <h2>Get a FREE Quote Today</h2>
                </div>
                <div className={'button-container-service'}>
                    <Link to={"/contact-us"}>
                        <button className={'free-quote-button-style'}>
                            <p className="free-quote-button-text">Free Quote</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;