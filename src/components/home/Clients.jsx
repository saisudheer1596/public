import React from 'react'
import client1 from './../../assets/client/client1.png'
import client2 from './../../assets/client/client2.png'
import client3 from './../../assets/client/client3.png'
import client4 from './../../assets/client/client4.png'
import client5 from './../../assets/client/client5.png'
function Clients() {
    return (
        <div className="clients-area bg-gray default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="clients-carousel owl-carousel owl-theme">
                            <a href="#"><img src={client1} alt="Client" height={100} width={100} /></a>
                            <a href="#"><img src={client2} alt="Client" height={100} width={100}/></a>
                            <a href="#"><img src={client3} alt="Client" height={100} width={100}/></a>
                            <a href="#"><img src={client4} alt="Client" height={100} width={100}/></a>
                            <a href="#"><img src={client5} alt="Client" height={100} width={100}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients