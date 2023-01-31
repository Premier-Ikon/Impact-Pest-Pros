import './ContactUsScreen.css'
import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';

function ContactUsScreen() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
    });

    const form = useRef();

    const {name, email, phone, address, message} = data

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kcmtpmn', 'template_pmorpjn', form.current, 'Per86BTwiKcS7pI-u')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();


        // alert("Thank you for your submission")


        try {
            const response = await fetch('https://v1.nocodeapi.com/dgoose201/google_sheets/AeRSztzHkKlVoLYX?tabId=Sheet1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([[name, email, phone, address, message, new Date().toLocaleString()]])
            });
            await response.json()
            setData({...data, name: "", email: "", phone: "", address: "", message: ""});


        }catch (err) {
            console.log(err)
        }

        alert("Thank you for your inquiry, someone on our team will be in contact as soon as possible . \n\n" +
            "Please allow 24 business hours for a response. If your inquiry is urgent please call us at (951)458-3966")
    }
    return (
        <div className="contact-body">
            <div className="contact-header">
                <div className="header-content">
                    <h3 className="contact-header-text-form">Get In Touch</h3>
                    <p className="contact-text">Please feel free to give us a <button className={"btn-button-contact"} onClick={() => window.open( 'tel: 951-458-3966', '_self')}>
                        <p>call</p>
                    </button> or email us anytime to get your pest control needs sorted out.
                    </p>
                </div>
            </div>
            <div className="contact-container">
                <div className="form-data">
                    <form ref={form} onSubmit={handleSubmit}>
                        <h3 className="contact-header-text">Free Quote</h3>
                        <div className="top-data">
                            <div>
                                <div className="data-header">
                                    <label>Name</label>
                                </div>
                                <input
                                    type="text"
                                    name={"name"}
                                    autoComplete={"off"}
                                    placeholder={"Enter Name"}
                                    value={name}
                                    onChange={handleChange}
                                    className="data-box"
                                />
                            </div>
                            <div>
                                <div className="data-header">
                                    <label>Email</label>
                                </div>
                                <input
                                    type="email"
                                    name={"email"}
                                    autoComplete={"off"}
                                    placeholder={"Enter Email"}
                                    value={email}
                                    onChange={handleChange}
                                    className="data-box"
                                />
                            </div>
                        </div>
                        <div className="middle-data">
                            <div>
                                <div className="data-header">
                                    <label>Phone</label>
                                </div>
                                <input
                                    type="text"
                                    name={"phone"}
                                    autoComplete={"off"}
                                    placeholder={"Enter Number"}
                                    value={phone}
                                    onChange={handleChange}
                                    className="data-box"
                                />
                            </div>
                            <div>
                                <div className="data-header">
                                    <label>Address</label>
                                </div>
                                <input
                                    type="text"
                                    name={"address"}
                                    autoComplete={"off"}
                                    placeholder={"Enter Address"}
                                    value={address}
                                    onChange={handleChange}
                                    className="data-box"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="data-header">
                                <label>Message</label>
                            </div>
                            {/*<input*/}
                            {/*    type="text"*/}
                            {/*    name={"message"}*/}
                            {/*    autoComplete={"off"}*/}
                            {/*    placeholder={"Enter Message"}*/}
                            {/*    value={message}*/}
                            {/*    onChange={handleChange}*/}
                            {/*    className="message-box"*/}
                            {/*/>*/}
                            <textarea
                                name={"message"}
                                // rows={3}
                                placeholder={"Tell us a little more about your problem or needs"}
                                autoComplete={"off"}
                                value={message}
                                className={"message-box"}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={"submit-button-container"}>
                            <input type={"submit"} style={{cursor: "pointer"}} value={"Submit"} className="submit-button"/>
                        </div>
                    </form>
                </div>
                <div className="contact-info">
                    <h3 className="contact-header-text-right">Contact Information</h3>
                    <div className="contact-info-element">
                        <button className="contact-info-button" onClick={() => window.open( 'tel: 951-458-3966', '_self')}>
                            <i className="fa-solid fa-phone" style={{marginRight: "10px"}}/>
                        </button>

                        <button className="contact-info-button" onClick={() => window.open( 'tel: 951-458-3966', '_self')}>
                            <p>(951)458-3966</p>
                        </button>
                    </div>
                    <div className="contact-info-element-bottom">
                        <button className="contact-info-button" onClick={() => window.open( "mailto: info@impactpestpros.com?subject=Online Inquiry", '_self')}>
                            <i className="fa-solid fa-envelope" style={{marginRight: "10px"}}/>
                        </button>

                        <button className="contact-info-button" onClick={() => window.open( "mailto: info@impactpestpros.com?subject=Online Inquiry", '_self')}>
                            <p>info@impactpestpros.com</p>
                        </button>
                    </div>
                    <div className="contact-icons">
                        <button className="contact-info-button" onClick={() => window.open( 'https://www.instagram.com/impactpestpros/', '_blank')}>
                            <i className="fa-brands fa-instagram" style={{marginRight: "10px"}}/>
                        </button>
                        <button className="contact-info-button" onClick={() => window.open( 'https://www.facebook.com/impactpestpros', '_blank')}>
                            <i className="fa-brands fa-facebook" style={{marginRight: "10px"}}/>
                        </button>
                    </div>
                </div>
            </div>


            <div className="contact-container-mobile">
                <div className="container-mobile">
                    <div className="contact-info">
                        <h3 className="contact-header-text-right">Contact Information</h3>
                        <div className="contact-info-element">
                            <button className="contact-info-button" onClick={() => window.open( 'tel: 951-458-3966', '_self')}>
                                <i className="fa-solid fa-phone" style={{marginRight: "10px"}}/>
                            </button>
                            <button className="contact-info-button" onClick={() => window.open( 'tel: 951-458-3966', '_self')}>
                                <p>(951)458-3966</p>
                            </button>
                        </div>
                        <div className="contact-info-element-bottom">
                            <button className="contact-info-button" onClick={() => window.open( "mailto: info@impactpestpros.com?subject=Online Inquiry", '_self')}>
                                <i className="fa-solid fa-envelope" style={{marginRight: "10px"}}/>
                            </button>
                            <button className="contact-info-button" onClick={() => window.open( "mailto: info@impactpestpros.com?subject=Online Inquiry", '_self')}>
                                <p>info@impactpestpros.com</p>
                            </button>
                        </div>
                        <div className="contact-icons">
                            <button className="contact-info-button" onClick={() => window.open( 'https://www.instagram.com/impactpestpros/', '_blank')}>
                                <i className="fa-brands fa-instagram" style={{marginRight: "10px"}}/>
                            </button>
                            <button className="contact-info-button" onClick={() => window.open( 'https://www.facebook.com/impactpestpros', '_blank')}>
                                <i className="fa-brands fa-facebook" style={{marginRight: "10px"}}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container-mobile">
                    <div className="form-data">
                        <form onSubmit={handleSubmit}>
                            <h3 className="contact-header-text">Free Quote</h3>
                            <div className="top-data">
                                <div>
                                    <div className="data-header">
                                        <label>Name</label>
                                    </div>
                                    <input
                                        type="text"
                                        name={"name"}
                                        autoComplete={"off"}
                                        placeholder={"Enter Name"}
                                        value={name}
                                        onChange={handleChange}
                                        className="data-box"
                                    />
                                </div>
                                <div>
                                    <div className="data-header">
                                        <label>Email</label>
                                    </div>
                                    <input
                                        type="email"
                                        name={"email"}
                                        autoComplete={"off"}
                                        placeholder={"Enter Email"}
                                        value={email}
                                        onChange={handleChange}
                                        className="data-box"
                                    />
                                </div>
                            </div>
                            <div className="middle-data">
                                <div>
                                    <div className="data-header">
                                        <label>Phone</label>
                                    </div>
                                    <input
                                        type="text"
                                        name={"phone"}
                                        autoComplete={"off"}
                                        placeholder={"Enter Number"}
                                        value={phone}
                                        onChange={handleChange}
                                        className="data-box"
                                    />
                                </div>
                                <div>
                                    <div className="data-header">
                                        <label>Address</label>
                                    </div>
                                    <input
                                        type="text"
                                        name={"address"}
                                        autoComplete={"off"}
                                        placeholder={"Enter Address"}
                                        value={address}
                                        onChange={handleChange}
                                        className="data-box"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="data-header">
                                    <label>Message</label>
                                </div>
                                {/*<input*/}
                                {/*    type="text"*/}
                                {/*    name={"message"}*/}
                                {/*    autoComplete={"off"}*/}
                                {/*    placeholder={"Enter Message"}*/}
                                {/*    value={message}*/}
                                {/*    onChange={handleChange}*/}
                                {/*    className="message-box"*/}
                                {/*/>*/}
                                <textarea
                                    name={"message"}
                                    // rows={3}
                                    placeholder={"Tell us a more about your needs"}
                                    autoComplete={"off"}
                                    value={message}
                                    className={"message-box"}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className={"submit-button-container"}>
                                <input type={"submit"} style={{cursor: "pointer"}} value={"Submit"} className="submit-button"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContactUsScreen;