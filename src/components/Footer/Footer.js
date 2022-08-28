import './Footer.css'

import FooterIcon from "../../assets/FOOTER-ICON.png"
import {Link} from "react-router-dom";


function Footer() {
    return (
        <div className="footer-container">
            <div className="upper-section">
                <div className="footer-left">
                    <div className="footer-icon">
                        <img src={FooterIcon} className="footer-logo" alt={"ad-logo"}/>
                    </div>
                    <div className="footer-buttons">
                        <button className="footer-icon-button" onClick={() => window.open( 'https://www.instagram.com/impactpestpros/', '_blank')}>
                            <i className="fa-brands fa-instagram" style={{marginRight: "10px", fontSize: "26px", color: "black"}}/>
                        </button>
                        <button className="footer-icon-button" onClick={() => window.open( 'https://www.facebook.com/impactpestpros', '_blank')}>
                            <i className="fa-brands fa-facebook" style={{marginRight: "10px", fontSize: "26px", color: "black"}}/>
                        </button>
                        <button className="footer-icon-button" onClick={() => window.open( 'https://www.facebook.com/impactpestpros', '_blank')}>
                            <i className="fa-brands fa-yelp" style={{marginRight: "10px", fontSize: "26px", color: "black"}}/>
                        </button>
                        <button className="footer-icon-button" onClick={() => window.open( 'https://www.facebook.com/impactpestpros', '_blank')}>
                            <i className="fa-brands fa-google" style={{marginRight: "10px", fontSize: "26px", color: "black"}}/>
                        </button>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-content">
                        <div className="footer-about">
                            <div className="footer-header">
                                <h2>About Us</h2>
                            </div>
                            <div>

                                <div className="footer-text">
                                    <Link to='about-us'>
                                        <button className="footer-icon-button">
                                            <p>Core Values</p>
                                        </button>
                                    </Link>
                                </div>
                                <div className="footer-text">
                                    <Link to='about-us'>
                                        <button className="footer-icon-button">
                                            <p>Our Mission</p>
                                        </button>
                                    </Link>
                                </div>
                                <div className="footer-text">
                                    <Link to='about-us'>
                                        <button className="footer-icon-button">
                                            <p>Our History</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <div>
                                <h2>Contact Us</h2>
                            </div>
                            <div>
                                <div className="footer-text">
                                    <button className="footer-icon-button" onClick={() => window.open( 'tel: 951-458-3966', '_self')}>
                                        <p>Call Today</p>
                                    </button>
                                </div>
                                <div className="footer-text">
                                    <button className="footer-icon-button" onClick={() => window.open( 'https://www.facebook.com/impactpestpros', '_blank')}>
                                        <p>Email Today</p>
                                    </button>
                                </div>
                                <div className="footer-text">
                                    <Link to='contact-us'>
                                        <button className="footer-icon-button">
                                            <p>Free Quote</p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-section">
                <div className="lower-content">
                    <h4 className="lower-text">© 2022 Impact Pest Pros Powered By Premier Ikon</h4>
                </div>
            </div>
        </div>
    );
}

export default Footer;