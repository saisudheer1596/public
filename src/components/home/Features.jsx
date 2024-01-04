import React from 'react'
import feature2 from './../../assets/feature/why-Choose-2.png'
import feature1 from './../../assets/feature/why-Choose-1.png'
import feature3 from './../../assets/feature/why-Choose-3.png'
import feature4 from './../../assets/feature/why-Choose-4.png'
import feature5 from './../../assets/feature/why-Choose-5.png'
import feature6 from './../../assets/feature/why-Choose-6.png'


function Features() {
    return (
        <div className="feature-area default-padding bottom-less bg-cover">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h2>Why Choose Us</h2>
                            <h3>Choose Warrior Tech Solutions for innovative technology solutions that empower your business to thrive</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="feature-items text-center">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 single-item">
                            <div className="item">
                                <div className="info">
                                <div className='icon'>
                                        <img src={feature1} style={{ width: '6rem' }} />
                                    </div>
                                    <h4>Experience and Expertise</h4>
                                    <p>
                                        Our team of professionals has years of experience and expertise in delivering innovative technology solutions to clients of all sizes. We have a proven track record of success, and we are committed to delivering high-quality products and features that meet the unique needs of each client.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 single-item">
                            <div className="item">
                                <div className="info">
                                <div className='icon'>
                                        <img src={feature2} style={{ width: '6rem' }} />
                                    </div>
                                    <h4>Customized Solutions</h4>
                                    <p>
                                        At Warrior Tech Solutions, we understand that every business is different, and that's why we offer customized solutions that are tailored to meet the specific needs of each client. We work closely with our clients to understand their goals and objectives, and we design solutions that help them achieve their desired outcomes.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 single-item">
                            <div className="item">
                                <div className="info">
                                <div className='icon'>
                                        <img src={feature3} style={{ width: '6rem' }} />
                                    </div>
                                    <h4>Cutting-Edge Technology</h4>
                                    <p>
                                        We are dedicated to staying at the forefront of the latest trends and technologies in the industry. We invest in our team's education and training to ensure that we are equipped to deliver cutting-edge solutions that help our clients stay ahead of the competition.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 single-item">
                            <div className="item">
                                <div className="info">
                                    <div className='icon'>
                                        <img src={feature4} style={{ width: '6rem' }} />
                                    </div>
                                    <h4>Personalized Attention</h4>
                                    <p>
                                        We take pride in providing personalized attention to each client. We are committed to building long-term relationships with our clients, and we work closely with them to ensure that they receive the best possible feature and support.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 single-item">
                            <div className="item">
                                <div className="info">
                                <div className='icon'>
                                        <img src={feature5} style={{ width: '6rem' }} />
                                    </div>
                                    <h4>Affordable Pricing</h4>
                                    <p>
                                        We offer flexible pricing options to ensure that our solutions are affordable and accessible to businesses of all sizes. We believe that technology solutions should be accessible to everyone, and we strive to deliver solutions that offer value for money.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 single-item">
                            <div className="item">
                                <div className="info">
                                <div className='icon'>
                                        <img src={feature6} style={{ width: '6rem' }} />
                                    </div>
                                    <h4>Security Protection</h4>
                                    <p>
                                        At Warrior Tech Solutions, we understand the importance of security in today's digital landscape. That's why we offer a range of security protection solutions that are designed to help businesses protect their sensitive data and prevent cyber-attacks.
                                    </p>

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