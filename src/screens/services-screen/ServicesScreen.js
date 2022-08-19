import './ServicesScreen.css'
import React, {useState} from "react";

import {Button} from "../../components/Buttons";
import RightProcessElement from "../../components/RightProcessElement/RightProcessElement";
import LeftProcessElement from "../../components/LeftProcessElement/LeftProcessElement";
import FaqElement from "../../components/FaqElement/FaqElement";
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
            answer: 'Yes all of our techinisions are trained and certified and will provide an extremely good service.',
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
      <div>
        <div className="service-background-image">
            <div className="service-background-mask">
                <div className="service-welcome-container">
                    <div className="welcome-header">
                        <h1>Impact Pest Pros</h1>
                    </div>
                    <div className="welcome-body">
                        <h3>Pest Services</h3>
                    </div>
                </div>
                <div className="service-button-container">
                    <div className='service-welcome-buttons'>
                        <Button buttonStyle={"btn--service"} path={"/pest-control"}>Pest Control</Button>
                        <Button buttonStyle={"btn--service"} path={"/bird-control"}>Bird Control</Button>
                    </div>
                    <div className='service-welcome-buttons'>
                        <Button buttonStyle={"btn--service"} path={"/rodent-control"}>Rodent Control</Button>
                        <Button buttonStyle={"btn--service"} path={"/bee-removal"}>Bee Removal</Button>
                    </div>
                    <div className='service-bottom-buttons'>
                        <Button buttonStyle={"btn--grey"} path={"/contact-us"}>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
          <div className="service-background-image-mobile">
              <div className="service-background-mask">
                  <div className="service-welcome-container">
                      <div className="welcome-header">
                          <h1>Impact Pest Pros</h1>
                      </div>
                      <div className="welcome-body">
                          <h3>Pest Control</h3>
                      </div>
                  </div>
                  <div className="service-button-container">
                      <div className='service-welcome-buttons'>
                          <Button buttonStyle={"btn--service"} path={"/pest-control"}>Pest Control</Button>
                          <Button buttonStyle={"btn--service"} path={"/bird-control"}>Bird Control</Button>
                      </div>
                      <div className='service-welcome-buttons'>
                          <Button buttonStyle={"btn--service"} path={"/rodent-control"}>Rodent Control</Button>
                          <Button buttonStyle={"btn--service"} path={"/bee-removal"}>Bee Removal</Button>
                      </div>
                      <div className='service-bottom-buttons'>
                          <Button buttonStyle={"btn--grey"} path={"/contact-us"}>Get Started</Button>
                      </div>
                  </div>
              </div>
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