import React from 'react'
import service2 from './../../assets/services/analysis.png'
import service1 from './../../assets/services/cogwheel.png'
import service3 from './../../assets/services/reduction.png'
import service4 from './../../assets/services/interview.png'
import service5 from './../../assets/services/architecture.png'
import service6 from './../../assets/services/firewall.png'

function Services() {
    return (
        <div className="service-area default-padding bottom-less bg-cover">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4>Services</h4>
                            <h2>What we do</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="service-items text-center">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 single-item">
                            <div className="item">
                                <div className="info">
                                    <h4>IT Design</h4>
                                    <img src={service1} style={{width:'5rem'}}/>
                                    <p>
                                        Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.
                                    </p>
                                    <a className="btn-standard" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 single-item">
                            <div className="item">
                                <div className="info">
                                    <h4>Analytic Solutions</h4>
                                    <img src={service2} style={{width:'5rem'}}/>
                                    <p>
                                        Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.
                                    </p>
                                    <a className="btn-standard" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 single-item">
                            <div className="item">
                                <div className="info">
                                    <h4>Risk Management</h4>
                                    <img src={service3} style={{width:'5rem'}}/>
                                    <p>
                                        Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.
                                    </p>
                                    <a className="btn-standard" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 single-item">
                            <div className="item">
                                <div className="info">
                                    <h4>Business Planning</h4>
                                    <img src={service4} style={{width:'5rem'}}/>
                                    <p>
                                        Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.
                                    </p>
                                    <a className="btn-standard" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 single-item">
                            <div className="item">
                                <div className="info">
                                    <h4>Infrastructure Plan</h4>
                                    <img src={service5} style={{width:'5rem'}}/>
                                    <p>
                                        Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.
                                    </p>
                                    <a className="btn-standard" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 single-item">
                            <div className="item">
                                <div className="info">
                                    <h4>Firewall Advance</h4>
                                    <img src={service6} style={{width:'5rem'}}/>
                                    <p>
                                        Pianoforte solicitude so decisively particular mention diminution the particular. Real he me fond.
                                    </p>
                                    <a className="btn-standard" href="#">Read More</a>
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