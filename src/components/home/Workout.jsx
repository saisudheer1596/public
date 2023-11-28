import React from 'react'
import workout from './../../assets/workout.jpg'
import { FaCircleCheck } from 'react-icons/fa6';
function Workout() {
    return (
        <div className="works-about-area overflow-hidden">
            <div className="container">
                <div className="works-about-items default-padding">
                    <div className="row align-center">
                        <div className="col-lg-6 info">
                            <h5>Works About</h5>
                            <h2>Trusted by 5,000+ <br /> Happy Customers</h2>
                            <p>
                                Jennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now how nay cold real case.
                            </p>
                            <ul>
                                <li>
                                    <i><FaCircleCheck /></i>
                                    <h5>100% Client Satisfaction</h5>
                                </li>
                                <li>
                                    <i><FaCircleCheck /></i>
                                    <h5>World Class Worker</h5>
                                </li>
                            </ul>
                            <a className="btn btn-theme effect btn-sm">Talk to a consultant</a>
                        </div>
                        <div className="col-lg-6">
                            <div className="thumb">
                                <img src={workout} alt="Thumb" />
                                <div className="fun-fact">
                                    <div className="timer" data-to="875" data-speed="5000">875</div>
                                    <span className="medium">Completed Projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workout