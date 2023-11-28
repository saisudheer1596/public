import React from 'react';
import { useWindowScroll } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { FaBars, FaPhone } from 'react-icons/fa';
import logo1 from '../assets/logo/logo-light.png'
import logo2 from '../assets/logo/logo.png'

function Header() {
    const [scroll] = useWindowScroll()
    console.log(scroll.y)
    return (
        <header id="home">
            {/* <nav className="navbar navbar-default navbar-fixed white bootsnav on menu-center no-full"> */}
            {/* <nav className="navbar navbar-default navbar-fixed white bootsnav on menu-center no-full no-background"> */}
                <nav className={`navbar navbar-default navbar-fixed white bootsnav on menu-center no-full ${scroll.y >80 ? '' :'no-background'}`}>
                <div className="container">
                    <div className="nav-box">
                        <div className="attr-nav inc-border">
                            <ul>
                                <li className="contact">
                                    <i><FaPhone /></i>
                                    <p>
                                        Call us today! 
                                        <strong>+123 456 7890</strong>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                <i><FaBars /></i>
                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img src={logo1} className="logo logo-display" alt="Logo1" />
                                <img src={logo2} className="logo logo-scrolled" alt="Logo2" />
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className="dropdown">
                                    <a href="#" data-toggle='dropdown'>Home  <IconChevronDown size={18} /></a>
                                   { /*<ul className='dropdow-menu'>
                                        <li className='dropdown'>
                                            <a href='#' data-toggle='dropdown'>Multi Page <IconChevronRight size={18}/></a>
                                            <ul className='dropdown-menu'>
                                                <li><a>Home It Solutions</a></li>
                                                <li><a>Home Technology</a></li>
                                                <li><a>Home It Agency</a></li>
                                                <li><a>Home Software Landing</a></li>
                                                <li><a>Home Cyber Security</a></li>
                                                <li><a>Home Tech Solution</a></li>
                                                <li><a>Home It Management</a></li>
                                                <li><a>Home Cyber Tech</a></li>
                                                <li><a>Home Internet Provider</a></li>
                                                <li><a>Home Business Solutions</a></li>
                                                <li><a>Home Technical Service</a></li>
                                            </ul>
                                        </li>
                                        <li className='dropdown'>
                                            <a href='' data-toggle='dropdown'>One Page <IconChevronRight size={18}/></a>
                                            <ul className='dropdown-menu'>
                                                <li><a>Home It Solutions</a></li>
                                                <li><a>Home Technology</a></li>
                                                <li><a>Home It Agency</a></li>
                                                <li><a>Home Software Landing</a></li>
                                                <li><a>Home Cyber Security</a></li>
                                                <li><a>Home Tech Solution</a></li>
                                                <li><a>Home It Management</a></li>
                                                <li><a>Home Cyber Tech</a></li>
                                                <li><a>Home Internet Provider</a></li>
                                                <li><a>Home Business Solutions</a></li>
                                                <li><a>Home Technical Service</a></li>
                                            </ul>
                                        </li>
                                    </ul>*/}  
                                </li>
                                <li className="dropdown">
                                    <a href="#"  data-toggle="dropdown">Company <IconChevronDown size={18} /></a>
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
                                    <a href="#" data-toggle="dropdown">Services <IconChevronDown size={18} /></a>
                                    <ul className="dropdown-menu fadeOutUp" >
                                        <li><a href="services.html">Services Version One</a></li>
                                        <li><a href="services-2.html">Services Version Two</a></li>
                                        <li><a href="services-3.html">Services Version Three</a></li>
                                        <li><a href="services-details.html">Services Details</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" data-toggle="dropdown">Case Studies  <IconChevronDown size={18} /></a>
                                    <ul className="dropdown-menu fadeOutUp" >
                                        <li><a href="case-studies-1.html">Versino One</a></li>
                                        <li><a href="case-studies-2.html">Versino Two</a></li>
                                        <li><a href="case-studies-3.html">Versino Three</a></li>
                                        <li><a href="case-details.html">Case Details</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" data-toggle="dropdown">Blog  <IconChevronDown size={18} /></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="blog-standard.html">Blog Standard</a></li>
                                        <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                                        <li><a href="blog-2-colum.html">Blog Grid Two Colum</a></li>
                                        <li><a href="blog-3-colum.html">Blog Grid Three Colum</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                        <li><a href="blog-single-with-sidebar.html">Blog Single With Sidebar</a></li>
                                    </ul>
                                </li>
                                <li>
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