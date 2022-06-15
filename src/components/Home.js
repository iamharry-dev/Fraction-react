import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <!-- //header -->
      // <!-- banner --> */}
        <div className="banner_w3lspvt" id="home">
          <div className="csslider infinity" id="slider1">
            <input type="radio" name="slides" checked="checked" id="slides_1" />
            <input type="radio" name="slides" id="slides_2" />
            <input type="radio" name="slides" id="slides_3" />
            <input type="radio" name="slides" id="slides_4" />

            <ul className="banner_slide_bg">
              <li>
                <div className="slider-info bg1">
                  <div className="bs-slider-overlay">
                    <div className="banner-text">
                      <div className="container">
                        <h2 className="movetxt agile-title text-capitalize">
                          Keep your business<br></br> safe with us
                        </h2>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. It has survived not only five
                          centuries.
                        </p>

                        <Link to="/contact" className="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="slider-info bg2">
                  <div className="bs-slider-overlay1">
                    <div className="banner-text">
                      <div className="container">
                        <h4 className="movetxt agile-title text-capitalize">
                          Keep Your Business Safe With Us{" "}
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. It has survived not only five
                          centuries.
                        </p>
                        <Link to="/contact" className="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="slider-info bg3">
                  <div className="bs-slider-overlay1">
                    <div className="banner-text">
                      <div className="container">
                        <h2 className="movetxt agile-title text-capitalize">
                          Keep Your Business Safe With Us
                        </h2>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. It has survived not only five
                          centuries.
                        </p>
                        <Link to="/contact" className="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="slider-info bg4">
                  <div className="bs-slider-overlay1">
                    <div className="banner-text">
                      <div className="container">
                        <h4 className="movetxt agile-title text-capitalize">
                          Keep Your Business Safe With Us{" "}
                        </h4>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. It has survived not only five
                          centuries.
                        </p>
                        <Link to="/contact" className="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="navigation">
              <div>
                <label for="slides_1"></label>
                <label for="slides_2"></label>
                <label for="slides_3"></label>
                <label for="slides_4"></label>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* <!-- //banner -->
//  <!-- banner bottom grids --> */}
        <section className="content-info py-5" id="about">
          <div className="container py-md-5">
            <h3 className="heading text-center mb-3 mb-sm-5">About us</h3>

            <div className="info-w3pvt-mid text-center px-lg-5">
              <div className="title-desc text-center px-lg-5">
                <img
                  src="assets/images/about1.png"
                  alt="news"
                  className="img-fluid"
                  width={400}
                />
                <p className="px-lg-5">
                  Praesent ullamcorper dui turpis.At vero eos et accusam et
                  justo duo dolores et ea rebum.Integer sit amet mattis quam,
                  sit amet ultricies velit. Praesent ullamcorper dui turpis.
                  Praesent ullamcorper dui turpis.At vero eos et accusam et
                  justo duo dolores et ea rebum.Integer sit amet mattis quam,
                  sit amet ultricies velit. Praesent ullamcorper dui turpis.
                </p>

                <Link
                  to="/services"
                  className="btn mt-lg-4 mt-3 read scroll"
                  role="button"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- //banner bottom grids -->

//  <!-- /services --> */}
        <section className="services py-5" id="services">
          <div className="container py-md-5">
            <h3 className="heading text-center mb-3 mb-sm-5">Services</h3>
            <div className="row ab-info"></div>
            <div className="row ab-info second mt-lg-4">
              <div className="col-md-3 ab-content">
                <div className="ab-content-inner">
                  <Link to="/single">
                    <img
                      src="assets/images/ser3.jpg"
                      alt="news"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="ab-info-con">
                    <h4>Data Analysis</h4>
                    <a
                      href="single.html"
                      className="read-more two btn m-0 px-3"
                    >
                      link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ab-content">
                <div className="ab-content-inner">
                  <Link to="/single">
                    <img
                      src="assets/images/ser4.jpg"
                      alt="news"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="ab-info-con">
                    <h4>Video Analytics</h4>
                    <a
                      href="single.html"
                      className="read-more two btn m-0 px-3"
                    >
                      {" "}
                      single{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ab-content">
                <div className="ab-content-inner">
                  <Link to="/single">
                    <img
                      src="assets/images/ser5.jpg"
                      alt="news"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="ab-info-con">
                    <h4>Software Development</h4>
                    <a
                      href="single.html"
                      className="read-more two btn m-0 px-3"
                    >
                      {" "}
                      single{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ab-content">
                <div className="ab-content-inner">
                  <Link to="/single">
                    <img
                      src="assets/images/ser6.jpg"
                      alt="news"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="ab-info-con">
                    <h4>Business Inteligence</h4>
                    <a
                      href="single.html"
                      className="read-more two btn m-0 px-3"
                    >
                      {" "}
                      single{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // <!-- /services -->

//   <!--/order-now--> */}
        <section className="order-sec py-5">
          <div className="container py-md-5">
            <div className="test-info text-center">
              <h3 className="tittle order">
                <span>CALL US TO BOOK For a DEMO</span>
                Our team will call back immediately
              </h3>
              <h4 className="tittle my-2">8807824096 </h4>

              <div className="read-more mx-auto m-0 text-center">
                <Link to="/contact" className="read-more scroll btn">
                  Click here
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!--//order-now-->

// <!-- footer --> */}
      </div>
    );
  }
}
export default Home;
