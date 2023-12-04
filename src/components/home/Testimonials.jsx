import React from 'react'
import { FaQuoteRight, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import team1 from '../../assets/team/1.jpg'
import team2 from '../../assets/team/2.jpg'
import team3 from '../../assets/team/3.jpg';
import { Carousel } from 'react-responsive-carousel';



function Testimonials() {
    return (
        <div className="testimonials-area carousel-shadow default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4>Testimonials</h4>
                            <h2>What People Say</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="testimonial-items">
                    <div className="testimonial-carousel owl-carousel owl-theme owl-loaded owl-drag">
                        <Carousel
                            autoPlay
                            infiniteLoop
                            showArrows={false}
                            showStatus={false}
                            showIndicators={true}
                            showThumbs={false}
                        >
                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="thumb">
                                            <img src={team1} alt="Thumb" />
                                            <i className="fas fa-quote-right"></i>
                                        </div>
                                    </div>
                                    <div className="info col-lg-7">
                                        <p>
                                            Excited main sixteen parties. direction has led immediate. Law gate her well bed life feet seen rent per instructions!
                                        </p>
                                        <div className="rating">
                                            <i className="fas fa-star"><FaStar /></i>
                                            <i className="fas fa-star"><FaStar /></i>
                                            <i className="fas fa-star"><FaStar /></i>
                                            <i className="fas fa-star"><FaStar /></i>
                                            <i className="fas fa-star-half-alt"><FaStarHalfAlt /></i>
                                        </div>
                                        <div className="provider">
                                            <h4>Ocean Babs</h4>
                                            <span>Head of IT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="thumb">
                                            <img src={team2} alt="Thumb" />
                                            <i className="fas fa-quote-right"></i>
                                        </div>
                                    </div>
                                    <div className="info col-lg-7">
                                        <p>
                                            Excited main sixteen parties. direction has led immediate. Law gate her well bed life feet seen rent per instructions!
                                        </p>
                                        <div className="rating">
                                            <i className="fas fa-star"><FaStar /></i>
                                            <i className="fas fa-star"><FaStar /></i>
                                            <i className="fas fa-star"><FaStar /></i>
                                            <i className="fas fa-star"><FaStar /></i>
                                            <i className="fas fa-star-half-alt"><FaStarHalfAlt /></i>
                                        </div>
                                        <div className="provider">
                                            <h4>Hundi Monas</h4>
                                            <span>Marketing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="thumb">
                                            <img src={team3} alt="Thumb" />
                                            <i className="fas fa-quote-right"></i>
                                        </div>
                                    </div>
                                    <div className="info col-lg-7">
                                        <p>
                                            Excited main sixteen parties. direction has led immediate. Law gate her well bed life feet seen rent per instructions!
                                        </p>
                                        <div className="rating">
                                            <i className="fas fa-star"><FaStar /></i>
                                            <i className="fas fa-star"><FaStar /></i>
                                            <i className="fas fa-star"><FaStar /></i>
                                            <i className="fas fa-star"><FaStar /></i>
                                            <i className="fas fa-star-half-alt"><FaStarHalfAlt /></i>
                                        </div>
                                        <div className="provider">
                                            <h4>Adam Jones</h4>
                                            <span>Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testimonials