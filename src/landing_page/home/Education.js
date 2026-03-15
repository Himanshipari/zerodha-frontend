import React from "react";

function Education() {
  return (
    <div className="container  mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="education"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p className="fs-5 text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from basic to advance trading.
          </p>
          <a href="" className="fs-5" style={{ textDecoration: "none" }}>
            Varsity<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="fs-5 mt-5 text-muted">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="fs-5" style={{ textDecoration: "none" }}>
            TradingQ&A<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
