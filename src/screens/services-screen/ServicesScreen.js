import './ServicesScreen.css'
import React, {useState} from "react";

import {Button} from "../../components/Buttons";
import RightProcessElement from "../../components/RightProcessElement/RightProcessElement";
import LeftProcessElement from "../../components/LeftProcessElement/LeftProcessElement";
import FaqElement from "../../components/FaqElement/FaqElement";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {ImageElement2} from "../../components/ImageElement2/ImageElement2"
import SpiderImage from "../../assets/SPIDER-ICON.png";
import BirdImage from "../../assets/BIRD-ICON.png";
import RodentImage from "../../assets/RODENT-ICON.png";
import BeesImage from "../../assets/BEE-ICON.png";
import BeesBrown from "../../assets/BEE-ICON-BROWN-01.png"
import SpiderBrown from "../../assets/SPIDER-ICON-BROWN-01.png"
import BirdBrown from "../../assets/BIRD-ICON-BROWN-01.png"
import RodentBrown from "../../assets/RODENT-ICON-BROWN-01.png"
import {Link} from "react-router-dom";

function ServicesScreen() {

    const [faqs, setfaqs] = useState([
        {
            question: 'What does your service include?',
            answer: 'Knocking down spider-webs from around the eaves and outdoor furniture. Spray accessible eaves, treat the window seals, and treat the exterior foundation.',
            open: false
        },
        {
            question: 'Is the inspection free?',
            answer: 'Yes we provide a free inspection in order to provide you with the correct service. Visit our contact us page to learn more.',
            open: false
        },
        {
            question: 'Are your technicians trained and certified?',
            answer: 'Yes all of our technicians are trained and certified and will provide an extremely good service.',
            open: false
        },
        {
            question: 'What other services besides pest control do you offer?',
            answer: 'We offer bird exclusions, rodent exclusions, bed bugs, and bee removal. Visit our services page to learn more.',
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
      <div className="service-body">
        <div className="service-background-image">
            <div className="general-header">
                <h3 className="black-header">All Services</h3>
            </div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className={"swiper-element-service"}
            >
                <div className="test-test">
                    <SwiperSlide className="test-test">
                        {/* eslint-disable-next-line react/style-prop-object */}
                        <ImageElement2 image={SpiderBrown} description={"Pest Control"} style={"general"} link={'pest-control'}/>
                    </SwiperSlide>
                    <SwiperSlide className="test-test">
                        {/* eslint-disable-next-line react/style-prop-object */}
                        <ImageElement2 image={BirdBrown} description={"Bird Control"} style={"general"} link={'bird-control'}/>
                    </SwiperSlide>
                    <SwiperSlide className="test-test">
                        {/* eslint-disable-next-line react/style-prop-object */}
                        <ImageElement2 image={RodentBrown} description={"Rodent Control"} style={"general"} link={'rodent-control'}/>
                    </SwiperSlide>
                    <SwiperSlide className="test-test">
                        {/* eslint-disable-next-line react/style-prop-object */}
                        <ImageElement2 image={BeesBrown} description={"Bee Removal"} style={"general"} link={'bee-removal'}/>
                    </SwiperSlide>
                </div>
            </Swiper>
        </div>
          <div className="service-background-mobile">
              <div className={"service-background-image-mobile"}>
                  <div className="general-header">
                      <h3 className="black-header">All Services</h3>
                  </div>
              </div>
              <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className={"swiper-element-service"}
              >
                  <div className="test-test">
                      <SwiperSlide className="test-test">
                          {/* eslint-disable-next-line react/style-prop-object */}
                          <ImageElement2 image={SpiderImage} description={"Pest Control"} style={"general"} link={'pest-control'}/>
                      </SwiperSlide>
                      <SwiperSlide className="test-test">
                          {/* eslint-disable-next-line react/style-prop-object */}
                          <ImageElement2 image={BirdImage} description={"Bird Control"} style={"general"} link={'bird-control'}/>
                      </SwiperSlide>
                      <SwiperSlide className="test-test">
                          {/* eslint-disable-next-line react/style-prop-object */}
                          <ImageElement2 image={RodentImage} description={"Rodent Control"} style={"general"} link={'rodent-control'}/>
                      </SwiperSlide>
                      <SwiperSlide className="test-test">
                          {/* eslint-disable-next-line react/style-prop-object */}
                          <ImageElement2 image={BeesImage} description={"Bee Removal"} style={"general"} link={'bee-removal'}/>
                      </SwiperSlide>
                  </div>
              </Swiper>
          </div>

          <div className="offerings-container">
              <div className="general-header">
                  <h2>A Process You Can Trust</h2>
              </div>
              <div className="process-elements">
                  <RightProcessElement icon={"fa-regular fa-user"} name={"Service"} secondName={"Service on your time"} description={"With online scheduling and account management, 24/7 customer support and on-our-way text alerts, we work around your schedule, not the other way around."} image={"service"}/>
                  <LeftProcessElement icon={"fa-regular fa-magnifying-glass"} name={"Inspection"} secondName={"Inspections done right"} description={"Our experts are trained in your local pest populations to identify your infestation, spot existing and potential issues and deliver the best, most comprehensive treatments that start working immediately."} image={"inspection"}/>
                  <RightProcessElement icon={"fa-regular fa-clipboard-list"} name={"Advice"} secondName={"Customized treatment plans"} description={"We’ll explain your pest problem in plain language and work with you to develop your own customized solution to nix your pests and keep them from coming back, 365 days a year."} image={"advice"}/>
                  <LeftProcessElement icon={"fa-regular fa-handshake"} name={"Partner"} secondName={"Your pest-free partners"} description={"Once we start treatment, you can relax. We guarantee we’ll nix your pests and keep them from coming back. Or we'll come back between treatments at no additional cost to you."} image={"partner"}/>
              </div>
          </div>
          <div className="offerings-container-mobile">
              <div className={"service-background-image-mobile-process"}>
                  <div className="general-header">
                      <h2>A Process You</h2>
                      <h2>Can Trust</h2>
                  </div>
              </div>
              <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className={"swiper-element-process"}
              >
                  <div className="test-test">
                      <SwiperSlide className="test-test">
                          <RightProcessElement icon={"fa-regular fa-user"} name={"Service"} secondName={"Service on your time"} description={"With online scheduling and account management, 24/7 customer support and on-our-way text alerts, we work around your schedule, not the other way around."} image={"service"}/>
                      </SwiperSlide>
                      <SwiperSlide className="test-test">
                          <RightProcessElement icon={"fa-regular fa-magnifying-glass"} name={"Inspection"} secondName={"Inspections done right"} description={"Our experts are trained in your local pest populations to identify your infestation, spot existing and potential issues and deliver the best treatments that start working immediately."} image={"inspection"}/>
                      </SwiperSlide>
                      <SwiperSlide className="test-test">
                          <RightProcessElement icon={"fa-regular fa-clipboard-list"} name={"Advice"} secondName={"Customized treatment plans"} description={"We’ll explain your pest problem in plain language and work with you to develop your own customized solution to nix your pests and keep them from coming back, 365 days a year."} image={"advice"}/>
                      </SwiperSlide>
                      <SwiperSlide className="test-test">
                          <RightProcessElement icon={"fa-regular fa-handshake"} name={"Partner"} secondName={"Your pest-free partners"} description={"Once we start treatment, you can relax. We guarantee we’ll nix your pests and keep them from coming back. Or we'll come back between treatments at no additional cost to you."} image={"partner"}/>
                      </SwiperSlide>
                  </div>
              </Swiper>
              <div className={'button-container-service'}>
                  <Link to={"/contact-us"}>
                      <button className={'service-button-style'}>
                          <p className="service-button-text">Get Started Today</p>
                      </button>
                  </Link>
              </div>
          </div>

          <div className="service-ad">
              <div className="general-header">
                  <h2>Pest Control Starting As Low As $28/mo.**</h2>
              </div>
              <div className="service-ad-container">
                  <div>
                      <i className="fa-regular fa-bug"></i>
                  </div>
                  <div className="ad-text-container">
                      <div className="ad-text">

                          <p className="description">Pests are swarming nationwide and your home needs protection. Luckily our pest protection service starts as low as $28/mo. Click below to schedule your FREE inspection and ensure your area is protected from pests.</p>
                      </div>
                      <div className="ad-button">
                          <Button buttonStyle={"btn--long"} path={"/contact-us"}>Schedule Free Inspection</Button>
                      </div>
                  </div>
              </div>
          </div>
          <div className="service-ad-mobile">
              <div className="general-header">
                  <h2>Pest Control Starting As Low As $28/mo.**</h2>
              </div>
              <div className="service-ad-container">
                  <div className="ad-text-container">
                      <div className="ad-text">
                          <p className="description">Pests are swarming nationwide and your home needs protection. Luckily our pest protection service starts as low as $28/mo. Click below to schedule your FREE inspection and ensure your area is protected from pests.</p>
                      </div>
                      <div className="ad-button">
                          <Button buttonStyle={"btn--long"} path={"/contact-us"}>Schedule Free Inspection</Button>
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

export default ServicesScreen;
