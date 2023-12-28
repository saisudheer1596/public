import React from 'react'
import client1 from './../../assets/client/client1.png'
import client2 from './../../assets/client/client2.png'
import client3 from './../../assets/client/client3.png'
import client4 from './../../assets/client/client4.png'
import client5 from './../../assets/client/client5.png'
import Carousel from 'react-multi-carousel'
function Clients() {
    const responsive ={
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 5 // optional, default to 1.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5,
            slidesToSlide: 5 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 5,
            slidesToSlide: 5 // optional, default to 1.
          }
        
    };
    return (
        <div className="clients-area bg-gray default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="clients-carousel owl-carousel owl-theme owl-loaded owl-drag">
                            <Carousel
                                responsive={responsive}
                            >
                                <a href="#"><img src={client1} alt="Client" height={100} width={100} /></a>
                                <a href="#"><img src={client2} alt="Client" height={100} width={100} /></a>
                                <a href="#"><img src={client3} alt="Client" height={100} width={100} /></a>
                                <a href="#"><img src={client4} alt="Client" height={100} width={100} /></a>
                                <a href="#"><img src={client5} alt="Client" height={100} width={100} /></a>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients