import React from 'react'
import { FaApple, FaGooglePlay, FaPaperPlane } from 'react-icons/fa'
import shape from "../../assets/team/map.svg";
import logo from '../../assets/logo/logo.png';

function Footer() {
  return (
    <footer>
        <div className="fixed-shape">
            <img src={shape} alt="Shape"/>
        </div>
        <div className="container">
            <div className="f-items default-padding">
                <div className="row">
                    <div className="col-lg-4 col-md-6 item">
                        <div className="f-item about">
                            <img src={logo} alt="Logo"/>
                            <p>
                                Happen active county. Winding for the morning am shyness evident to poor. Garrets because elderly new.
                            </p>
                            <form action="#">
                                <input type="email" placeholder="Your Email" className="form-control" name="email"/>
                                <button type="submit">
                                    <i>
                                        <FaPaperPlane />
                                    </i>
                                </button>  
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 item">
                        <div className="f-item link">
                            <h4 className="widget-title">Company</h4>
                            <ul>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Meet Our Team</a>
                                </li>
                                <li>
                                    <a href="#">News & Media</a>
                                </li>
                                <li>
                                    <a href="#">Case Studies</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Investors</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 item">
                        <div className="f-item link">
                            <h4 className="widget-title">Solutions</h4>
                            <ul>
                                <li>
                                    <a href="#">IT Management</a>
                                </li>
                                <li>
                                    <a href="#">Cyber Security</a>
                                </li>
                                <li>
                                    <a href="#">Cloud Computing</a>
                                </li>
                                <li>
                                    <a href="#">IT Consulting</a>
                                </li>
                                <li>
                                    <a href="#">Software Dev</a>
                                </li>
                                <li>
                                    <a href="#">Backup & Recovery</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 item">
                        <div className="f-item">
                            <h4 className="widget-title">Contact Info</h4>
                            <div className="address">
                                <ul>
                                    <li>
                                        <strong>Address:</strong>
                                        5919 Trussville Crossings Pkwy, Birmingham AL 35235
                                    </li>
                                    <li>
                                        <strong>Email:</strong>
                                        <a href="mailto:info@validtheme.com">info@validtheme.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="download">
                                <h5>Download</h5>
                                <a href="#">
                                    <i>
                                        <FaApple />
                                    </i>
                                     App Store
                                </a>
                                <a href="#">
                                    <i>
                                        <FaGooglePlay />
                                    </i>
                                     Google Play
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>Copyright &copy;  2020. Designed by <a href="#">validthemes</a></p>
                    </div>
                    <div className="col-md-6 text-right link">
                        <ul>
                            <li>
                                <a href="#">Terms</a>
                            </li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer