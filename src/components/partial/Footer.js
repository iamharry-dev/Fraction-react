import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-content">
        <div className="layer footer">
          <div className="container-fluid">
            <div className="row footer-top-inner-w3ls">
              <div className="col-lg-4 col-md-6 footer-top ">
                <h2>
                  <a href="index.html">Fraction Analytics</a>
                </h2>
                <p className="my-3">
                  Donec consequat sam libero tempore, cum soluta nobis est
                  eligendi optio cumque nihil impedit quo minus
                </p>
                <p>
                  Id quod possimusapien ut leo cursus rhoncus. Nullam dui mi,
                  vulputate ac metus at, semper varius orci.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                <div className="footer-w3pvt">
                  <h3 className="mb-3 w3pvt_title">Opening Hours</h3>
                  <hr />
                  <ul className="list-info-w3pvt last-w3ls-contact mt-lg-4">
                    <li>
                      <p> Monday - Friday 09.00 am - 09.00 pm</p>
                    </li>
                    <li className="my-2">
                      <p>Saturday 08.00 am - 10.00 pm</p>
                    </li>
                    <li className="my-2">
                      <p>Sunday 10.00 am - 12.00 pm</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                <div className="footer-w3pvt">
                  <h3 className="mb-3 w3pvt_title">Contact Us</h3>
                  <hr />
                  <div className="last-w3ls-contact">
                    <p>
                      <a href="mailto:fractionanalytics.com">
                        info@fractionanalytics.com
                      </a>
                    </p>
                  </div>
                  <div className="last-w3ls-contact my-2">
                    <p>+91 8807824096</p>
                  </div>
                  <div className="last-w3ls-contact">
                    <p>
                      + 91 6382774474,
                      <br />
                      Chennai , TamilNadu-72.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="copy-right-grids text-li text-center my-sm-4 my-4">
              © 2022 Fraction Analytics. All Rights Reserved | Design by
              <a href="https://www.fractionanalytics.com"> Fraction & Team </a>
            </p>
            <div className="w3ls-footer text-center mt-4">
              <ul className="list-unstyled w3ls-icons">
                <li>
                  <a href="#">
                    <span className="fa fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-linkedin"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fa fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="move-top text-right">
              <a href="#home" className="move-top">
                {" "}
                <span
                  className="fa fa-angle-up  mb-3"
                  aria-hidden="true"
                ></span>
              </a>
            </div>
          </div>
          {/* <!-- //footer bottom --> */}
        </div>
      </footer>
    );
  }
}
export default Footer;
