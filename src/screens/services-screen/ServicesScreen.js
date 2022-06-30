import './ServicesScreen.css'
import React from "react";

import {Button} from "../../components/Buttons";
import RightProcessElement from "../../components/RightProcessElement/RightProcessElement";
import LeftProcessElement from "../../components/LeftProcessElement/LeftProcessElement";
import HomeImage from '../../assets/HOME-IMAGE.png'


function ServicesScreen() {
    return(
      <div>
        <div className="service-background-image">
            <div className="mask">
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
                        <Button buttonStyle={"btn--service"}>Pest Control</Button>
                        <Button buttonStyle={"btn--service"}>Bird Control</Button>
                    </div>
                    <div className='service-welcome-buttons'>
                        <Button buttonStyle={"btn--service"}>Rodent Control</Button>
                        <Button buttonStyle={"btn--service"}>Gopher Control</Button>
                    </div>
                    <div className='service-bottom-buttons'>
                        <Button buttonStyle={"btn--grey"}>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
          <div className="offerings-container">
              <div className="general-header">
                  <h2>A process you can trust</h2>
              </div>
              <div className="process-elements">
                  <RightProcessElement icon={"fa-regular fa-user"} name={"Service"} secondName={"Service on your time"} description={"With online scheduling and account management, 24/7 customer support and on-our-way text alerts, we work around your schedule, not the other way around."} image={"service"}/>
                  <LeftProcessElement icon={"fa-regular fa-user"} name={"Service"} secondName={"Service on your time"} description={"With online scheduling and account management, 24/7 customer support and on-our-way text alerts, we work around your schedule, not the other way around."} image={"service"}/>
                  <RightProcessElement icon={"fa-regular fa-user"} name={"Service"} secondName={"Service on your time"} description={"With online scheduling and account management, 24/7 customer support and on-our-way text alerts, we work around your schedule, not the other way around."} image={"service"}/>
                  <LeftProcessElement icon={"fa-regular fa-user"} name={"Service"} secondName={"Service on your time"} description={"With online scheduling and account management, 24/7 customer support and on-our-way text alerts, we work around your schedule, not the other way around."} image={"service"}/>
              </div>
          </div>

          <div className="service-ad">
              <div>
                  <p>Rodent Control Starting As Low As $70/mo.**</p>
              </div>
              <div>
                  <div>
                      <i className="fa-regular fa-bug"></i>
                  </div>
                  <div>
                      <p className="description">Rodents are swarming nationwide and your home needs protection. Luckily our rodent protection service starts as low as $70/mo. Click below to schedule your FREE inspection and ensure your area is protected from insects.</p>
                  </div>
              </div>
          </div>


      </div>
    );
}

export default ServicesScreen;