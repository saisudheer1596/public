import React, { useState } from 'react';
//import './css/nav.css'
import { useWindowScroll } from '@mantine/hooks';
import logo1 from '../assets/logo/logo-light.png'
import logo2 from '../assets/logo/logo.png'

function Header() {
    const [scroll] = useWindowScroll()
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header id="home">
            <nav className={`navbar navbar-default navbar-fixed white bootsnav on menu-center no-full ${scroll.y > 80 ? '' : 'no-background'}`}>
                <div className="container">
                    <div className="nav-box">
                        <div className="attr-nav inc-border">
                            <ul>
                                <li className="contact">
                                    <i className="fas fa-phone"></i>
                                    <p>
                                        Call us today!
                                        <strong>+123 456 7890</strong>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-header">
                            <button type="button" className={`navbar-toggle ${isOpen ? '' : 'collapsed'}`} onClick={toggleNavbar} data-toggle="collapse" data-target="#navbar-menu" aria-expanded='true'>
                                <i className={`fa ${isOpen ? 'fa-bars' : 'fa-times'}`}></i>
                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img src={logo1} className="logo logo-display" alt="Logo1" />
                                <img src={logo2} className="logo logo-scrolled" alt="Logo2" />
                            </a>
                        </div>
                        <div className={`collapse navbar-collapse ${isOpen ? '' : 'show'}`} id="navbar-menu">
                            <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="dropdown">
                                    <a href="#" className='dropdown-toggle' data-toggle='dropdown'>Home</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className='dropdown-toggle' data-toggle="dropdown">Company</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="about-us.html">About Company</a></li>
                                        <li><a href="why-choose-us.html">Why Choose us</a></li>
                                        <li><a href="team.html">Meet Our Team</a></li>
                                        <li><a href="team-single.html">Team Single</a></li>
                                        <li><a href="contact.html">Get in Touch</a></li>
                                        <li><a href="faq.html">Faq</a></li>
                                        <li><a href="404.html">Error Page</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className='dropdown-toggle' data-toggle="dropdown">Services</a>
                                    <ul className="dropdown-menu fadeOutUp" >
                                        <li><a href="services.html">Services Version One</a></li>
                                        <li><a href="services-2.html">Services Version Two</a></li>
                                        <li><a href="services-3.html">Services Version Three</a></li>
                                        <li><a href="services-details.html">Services Details</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className='dropdown-toggle' data-toggle="dropdown">Case Studies</a>
                                    <ul className="dropdown-menu fadeOutUp" >
                                        <li><a href="case-studies-1.html">Versino One</a></li>
                                        <li><a href="case-studies-2.html">Versino Two</a></li>
                                        <li><a href="case-studies-3.html">Versino Three</a></li>
                                        <li><a href="case-details.html">Case Details</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className='dropdown-toggle' data-toggle="dropdown">Blog</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="blog-standard.html">Blog Standard</a></li>
                                        <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                                        <li><a href="blog-2-colum.html">Blog Grid Two Colum</a></li>
                                        <li><a href="blog-3-colum.html">Blog Grid Three Colum</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                        <li><a href="blog-single-with-sidebar.html">Blog Single With Sidebar</a></li>
                                    </ul>
                                </li>
                                <li id='contact'>
                                    <a href="./Contactpage.jsx">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header