import React, { Component } from "react";
import { Link } from "react-router-dom";
import App from "./App";

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
        <App />
      </div>
    );
  }
}
export default Single;
