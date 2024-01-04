import React from 'react'
import service1 from './../../assets/services/service-1.jpg'
import service2 from './../../assets/services/service-2.jpg'
import service3 from './../../assets/services/service-3.jpg'
import service4 from './../../assets/services/service-4.jpg'
import service5 from './../../assets/services/service-5.jpg'
import service8 from './../../assets/services/service-8.png'
import '../css/Service.css'

function Services() {
    return (
        <div className="service-area half-bg overflow-hidden default-padding-top">
            <div className="container">
                <div className="heading-left">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5>15 years of experience</h5>
                            <h2>
                                Offer The Latest Software And Solutions To Our customers!
                            </h2>
                        </div>
                        <div className="col-lg-6">
                            <p>
                                Everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="services-box text-light">
                    <div className="row">
                        <div className="single-item col-lg-4 col-md-6">
                            <div className="item">
                                <div className="photo">
                                    <a href="https://www.warriortechsolutions.in/service/We offer custom web development services">
                                        <img src={service1} alt="" />
                                    </a>
                                </div>
                                <div className="text">
                                    <h4>
                                        <a href="https://www.warriortechsolutions.in/service/We offer custom web development services">Web Development</a>
                                    </h4>
                                    <p>
                                        We offer custom web development services that are tailored to meet the specific needs of our clients.
                                    </p>
                                    <div className="read-more">
                                        <a href="https://www.warriortechsolutions.in/service/We offer custom web development services">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-item col-lg-4 col-md-6">
                            <div className="item">
                                <img src={service2} alt="Thumb" />
                                <div className="overlay">
                                    <div className="info">
                                        <h4>Product Design</h4>
                                        <a href="#">
                                            <i className="fas fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-item col-lg-4 col-md-6">
                            <div className="item">
                                <img src={service3} alt="Thumb" />
                                <div className="overlay">
                                    <div className="info">
                                        <h4>Outsourcing</h4>
                                        <a href="#">
                                            <i className="fas fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-item col-lg-4 col-md-6">
                            <div className="item">
                                <img src={service4} alt="Thumb" />
                                <div className="overlay">
                                    <div className="info">
                                        <h4>Outsourcing</h4>
                                        <a href="#">
                                            <i className="fas fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-item col-lg-4 col-md-6">
                            <div className="item">
                                <img src={service5} alt="Thumb" />
                                <div className="overlay">
                                    <div className="info">
                                        <h4>Outsourcing</h4>
                                        <a href="#">
                                            <i className="fas fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single-item col-lg-4 col-md-6">
                            <div className="item">
                                <img src={service8} alt="Thumb" />
                                <div className="overlay">
                                    <div className="info">
                                        <h4>Outsourcing</h4>
                                        <a href="#">
                                            <i className="fas fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services