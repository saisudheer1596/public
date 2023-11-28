import React from 'react'
import blog1 from './../../assets/blog/blog1.jpg'
import blog2 from './../../assets/blog/blog2.jpg'
import blog3 from './../../assets/blog/blog3.jpg'
function Blog() {
    return (
        <div className="blog-area content-less default-padding bottom-less">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4>Popular News</h4>
                            <h2>Latest From our blog</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="blog-items">
                    <div className="row">
                        <div className="single-item col-lg-4 col-md-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="blog-single-with-sidebar.html">
                                        <img src={blog1} alt="Thumb" />
                                    </a>
                                </div>
                                <div className="info">
                                    <div className="cats">
                                        <a href="#">Technology</a>
                                    </div>
                                    <div className="meta">
                                        <ul>
                                            <li><i className="fas fa-calendar-alt"></i> 12 Aug, 2020</li>
                                            <li><i className="fas fa-user"></i> By <a href="#">John Botha</a></li>
                                        </ul>
                                    </div>
                                    <h4>
                                        <a href="blog-single-with-sidebar.html">Additions in conveying or collected objection</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="single-item col-lg-4 col-md-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="blog-single-with-sidebar.html">
                                        <img src={blog2} alt="Thumb" />
                                    </a>
                                </div>
                                <div className="info">
                                    <div className="cats">
                                        <a href="#">Firewall</a>
                                    </div>
                                    <div className="meta">
                                        <ul>
                                            <li><i className="fas fa-calendar-alt"></i> 05 Oct, 2020</li>
                                            <li><i className="fas fa-user"></i> By <a href="#">Jork Mon</a></li>
                                        </ul>
                                    </div>
                                    <h4>
                                        <a href="blog-single-with-sidebar.html">Discourse ye continued pronounce we abilities</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="single-item col-lg-4 col-md-6">
                            <div className="item">
                                <div className="thumb">
                                    <a href="blog-single-with-sidebar.html">
                                        <img src={blog3} alt="Thumb" />
                                    </a>
                                </div>
                                <div className="info">
                                    <div className="cats">
                                        <a href="#">Security</a>
                                    </div>
                                    <div className="meta">
                                        <ul>
                                            <li><i className="fas fa-calendar-alt"></i> 27 Dec, 2020</li>
                                            <li><i className="fas fa-user"></i> By <a href="#">Spark Lee</a></li>
                                        </ul>
                                    </div>
                                    <h4>
                                        <a href="blog-single-with-sidebar.html">Children greatest online extended delicate of</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog