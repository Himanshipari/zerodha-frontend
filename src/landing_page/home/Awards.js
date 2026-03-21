import React from "react";

function Awards() {
  return (
    <div className="container mt-1 p-2">
      <div className="row ">
        
        <div className="col-6 ">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
          />
        </div>

        <div className="col-6 mt-4">
          <h1 className="mb-3">Largest stock broker in India</h1>

          <p className="mb-4 fs-5 mt-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row ">
            <div className="col-6">
              <ul>
                <li className="mt-4 fs-5">Futures and Options</li>
                <li className="mt-4 fs-5">Commodity derivatives</li>
                <li className="mt-4 fs-5">Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li className="mt-4 fs-5">Stocks & IPOs</li>
                <li className="mt-4 fs-5">Direct mutual funds</li>
                <li className="mt-4 fs-5">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src='media/images/pressLogos.png' alt="" style={{width:"90%"}}/>
        </div>

      </div>
    </div>
  );
}

export default Awards;