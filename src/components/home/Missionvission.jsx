import React from 'react'
import mission from './../../assets/mission.jpg'

function Missionvission() {
    return (
        <div className="who-we-area-area bg-dark text-light">
            <div className="container-fluid">
                <div className="who-we-area-box">
                    <div className="row">
                        <div className="col-lg-6 thumb bg-cover" style={{backgroundImage:`url(${mission})`}}></div>
                        <div className="col-lg-6 info">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 item">
                                    <h4>Our Mission</h4>
                                    <h2 className="text-blur">Mission</h2>
                                    <p>
                                        Engaged its was evident pleased husband. Ye goodness felicity do the best disposal dwelling no. First am plate jokes to began of cause an scale. Subjects he prospect elegance followed no overcame possible it on best circle.
                                    </p>
                                    <a className="btn circle btn-light effect btn-sm">Know More 
                                        <i className="fas fa-arrow-alt-circle-right"></i>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-6 item">
                                    <h4>Our Vision</h4>
                                    <h2 className="text-blur">Vision</h2>
                                    <p>
                                        Engaged its was evident pleased husband. Ye goodness felicity do the best disposal dwelling no. First am plate jokes to began of cause an scale. Subjects he prospect elegance followed no overcame possible it on best circle.
                                    </p>
                                    <a className="btn circle btn-light effect btn-sm">Know More 
                                        <i className="fas fa-arrow-alt-circle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Missionvission