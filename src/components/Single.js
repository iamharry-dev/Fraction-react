import React, { Component } from "react";
import { Link } from "react-router-dom";
class Single extends Component {
  render() {
    return (
      <div>
        <section className="inner-page-banner" id="home"></section>
        <div className="breadcrumb-agile">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Single page
            </li>
          </ol>
        </div>
        <section className="what-we-do py-5">
          <div className="container py-md-5">
            <h3 className="heading text-center mb-3 mb-sm-5">OUR PRODUCTS</h3>
            <div className="row what-we-do-grid">
              <div className="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0">
                <img src="assets/images/sp1.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-3 col-md-6 bg-grid-clr">
                <h4 className="mt-md-0 my-2">Object Detection </h4>
                <p className="">
                  Sed ut perspiciatis undert sed omnis natus error .
                </p>
              </div>
              <div className="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-0 mt-4">
                <img src="assets/images/sp2.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-3 col-md-6 bg-grid-clr mt-lg-0 mt-md-4">
                <h4 className="mt-md-0 my-2">Human Activity Detection</h4>
                <p className="">
                  Sed ut perspiciatis undert sed omnis natus error .
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Single;
