import React from 'react'
import imageone from './../../assets/banner/banner1.jpg'
import imagetwo from './../../assets/banner/banner2.jpg'
//import { IconPlayerPlayFilled } from '@tabler/icons-react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
    return (
        <div>
            <div className='banner-area top-pad-60-responsive border-shadow text-center content-less text-large'>
                <Carousel
                    autoPlay
                    infiniteLoop  
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                >
                    <div style={{ position: 'relative'}} >
                        <img src={imageone} alt="Image 1" />
                        <div className='banner-background shadow dark'>
                            <div className="slider-thumb bg-cover">
                                <div className="box-table">
                                    <div className="box-cell ">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-8 offset-lg-2">
                                                    <div className="content">
                                                        <h2 data-animation="animated slideInRight" className='text-white'>
                                                            Creating a better 
                                                            <strong>IT solutions</strong>
                                                        </h2>
                                                        <a data-animation="animated fadeInUp" className="btn circle btn-light border btn-md" href="#">
                                                            Start Now
                                                        </a>
                                                        <a className="popup-youtube relative video-play-button" href="#">
                                                        <i className="fa fa-play"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ position: 'relative' }} >
                        <img src={imagetwo} alt="Image 1" /> 
                        <div className='banner-background shadow dark'>
                            <div className="slider-thumb bg-cover">
                                <div className="box-table">
                                    <div className="box-cell ">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-8 offset-lg-2">
                                                    <div className="content">
                                                        <h2 data-animation="animated slideInRight" className='text-white'>
                                                            Transform every
                                                            <strong>Digital Process</strong>
                                                        </h2>
                                                        <a data-animation="animated fadeInUp" className="btn circle btn-light border btn-md" href="#">
                                                            Start Now
                                                        </a>
                                                        <a className="popup-youtube relative video-play-button" href="#">
                                                            <i className="fa fa-play"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel >
            </div >
        </div>

    )
}

export default Banner