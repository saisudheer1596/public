import React from 'react'
import { FaEnvelopeOpen, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

function Contactarea() {
    return (
        <div className="contact-area overflow-hidden default-padding bg-gray">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 contact-form-box">
                        <div className="content">
                            <div className="heading">
                                <h2>Need Help?</h2>
                                <p>Reach out to the world’s most reliable IT services.</p>
                            </div>
                            <form action="assets/mail/contact.php" method="POST" className="contact-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" />
                                            <span className="alert-error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group comments">
                                            <textarea className="form-control" id="comments" name="comments" placeholder="Please describe what you need."></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <button type="submit" name="submit" id="submit">
                                            Get a free consultation
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-12 alert-notification">
                                    <div id="message" className="alert-msg"></div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6 info">
                        <div className="contact-tabs">
                            <ul id="tabs" className="nav nav-tabs">
                                <li className="nav-item">
                                    <a href="" data-target="#tab1" data-toggle="tab" className="active nav-link">
                                        Address
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="" data-target="#tab2" data-toggle="tab" className="nav-link">
                                        Google Maps
                                    </a>
                                </li>
                            </ul>
                            <div id="tabsContent" className="tab-content">
                                <div id="tab1" className="tab-pane fade active show">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <i>
                                                    <FaMapMarkerAlt/>
                                                </i>
                                            </div>
                                            <div className="info">
                                                <p>
                                                    Our Location
                                                    <span>Plot No 201, Gayathri Nagar, Hyderabad 500018</span>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i>
                                                    <FaEnvelopeOpen />
                                                </i>
                                            </div>
                                            <div className="info">
                                                <p>
                                                    Send Us Mail
                                                    <span>support@warriortechsolutions.in</span>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i>
                                                    <FaPhone />
                                                </i>
                                            </div>
                                            <div className="info">
                                                <p>
                                                    Call Us
                                                    <span>+91 7416243959</span>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="tab2" className="tab-pane fade">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contactarea