import React from 'react'
import { useState } from 'react'

function Faq() {
    const [activePanel, setActivePanel] = useState(null);

    const toggleAccordion = (panelNumber) => {
        setActivePanel(panelNumber === activePanel ? null : panelNumber);
    };

    return (
        <div className="faq-area default-padding bg-gray">
            <div className="container">
                <div className="testimonial-items">
                    <div className="row">
                        <div className="col-lg-5 info">
                            <h5>faq</h5>
                            <h2>Most common question about our services</h2>
                            <a className="btn btn-theme effect btn-md">Viewl All</a>
                        </div>
                        <div className="col-lg-7">
                            <div className="faq-content">
                                <div className="accordion" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne">
                                            <h4 className={activePanel === 1 ? 'mb-0' : 'mb-0 collapsed'} onClick={() => toggleAccordion(1)} data-toggle="collapse" data-target="#collapseOne" aria-expanded={activePanel === 1 ? 'true' : 'false'} aria-controls="collapseOne">
                                                <strong>?</strong> Do I need a business plan
                                            </h4>
                                        </div>
                                        <div id="collapseOne" className={activePanel === 1 ? 'collapse show' : 'collapse'} aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>
                                                    Continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first time achivement.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h4 className={activePanel === 2 ? 'mb-0' : 'mb-0 collapsed'} onClick={() => toggleAccordion(2)} data-toggle="collapse" data-target="#collapseTwo" aria-expanded={activePanel === 2 ? 'true' : 'false'} aria-controls="collapseTwo">
                                                <strong>?</strong> How long should a business plan be
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className={activePanel === 2 ? 'collapse show' : 'collapse'} aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>
                                                    Continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first time achivement.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingFour">
                                            <h4 className={activePanel === 3 ? 'mb-0' : 'mb-0 collapsed'} onClick={() => toggleAccordion(3)} data-toggle="collapse" data-target="#collapseFour" aria-expanded={activePanel === 3 ? 'true' : 'false'} aria-controls="collapseFour">
                                                <strong>?</strong> Where do I start
                                            </h4>
                                        </div>
                                        <div id="collapseFour" className={activePanel === 3 ? 'collapse show' : 'collapse'} aria-labelledby="headingFour" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>
                                                    Continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first time achivement.
                                                </p>
                                            </div>
                                        </div>
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

export default Faq