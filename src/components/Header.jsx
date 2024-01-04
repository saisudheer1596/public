import React, { useState } from 'react';
//import './css/nav.css'
import { useWindowScroll } from '@mantine/hooks';
import logo from '../assets/logo/logo.png'

function Header() {
    const [scroll] = useWindowScroll()
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header id="home">
            <nav className={`navbar navbar-default navbar-fixed white bootsnav on menu-center no-full `}>
                <div className="container">
                    <div className="nav-box">
                        <div className="attr-nav inc-border">
                            <ul>
                                <li className="contact">
                                    <i className="fas fa-phone"></i>
                                    <p>
                                        Call us today!
                                        <strong>+91 7416243959</strong>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-header">
                            <button type="button" className={`navbar-toggle ${isOpen ? '' : 'collapsed'}`} onClick={toggleNavbar} data-toggle="collapse" data-target="#navbar-menu" aria-expanded='true'>
                                <i className={`fa ${isOpen ? 'fa-bars' : 'fa-times'}`}></i>
                            </button>
                            <a className="navbar-brand" href="https://www.warriortechsolutions.in/">
                                <img src={logo} className="logo logo-scrolled" alt="Logo1" />
                                
                            </a>
                        </div>
                        <div className={`collapse navbar-collapse ${isOpen ? '' : 'show'}`} id="navbar-menu">
                            <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className='nav-item'>
                                    <a href="#" className='nav-link' data-toggle='dropdown'>Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a href="#" className='nav-link' data-toggle='nav-item'>About</a>    
                                </li>
                                <li className='nav-item'>
                                    <a href="#" className='nav-link' data-toggle='nav-item'>Services</a>
                                </li>
                                <li id='contact'>
                                    <a href="#">Contact</a>
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