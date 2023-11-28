import React from 'react'
import feature1 from './../../assets/feature/feature1.jpg'
import feature2 from './../../assets/feature/feature2.jpg'
import feature3 from './../../assets/feature/feature3.jpg'
import { FaAngleRight } from 'react-icons/fa'
function Features() {
  return (
    <div className="feature-area half-bg overflow-hidden default-padding-top">
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
            <div className="features-box text-light">
                <div className="row">
                    <div className="single-item col-lg-4 col-md-6">
                        <div className="item">
                            <img src={feature1} alt="Thumb"/>
                            <div className="overlay">
                                <div className="info">
                                    <h4>Custom Software</h4>
                                    <a href="#">
                                        <i className="fas fa-angle-right">
                                            <FaAngleRight />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-item col-lg-4 col-md-6">
                        <div className="item">
                            <img src={feature2} alt="Thumb"/>
                            <div className="overlay">
                                <div className="info">
                                    <h4>Product Design</h4>
                                    <a href="#">
                                        <i className="fas fa-angle-right">
                                            <FaAngleRight />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-item col-lg-4 col-md-6">
                        <div className="item">
                            <img src={feature3} alt="Thumb"/>
                            <div className="overlay">
                                <div className="info">
                                    <h4>Outsourcing</h4>
                                    <a href="#">
                                        <i className="fas fa-angle-right">
                                            <FaAngleRight />
                                        </i>
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

export default Features