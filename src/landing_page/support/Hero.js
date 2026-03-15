import React from 'react';
function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
        <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" className="fs-5">Track Tickets</a>
        </div>
        <div className="row p-5 m-3">
        <div className="col-6 p-5">
            <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder="Eg. how do I actiate F&O"/>
            <br/>
            <a href="" className="fs-5">Track account opening</a>&nbsp;&nbsp;
            <a href="" className="fs-5">Track segment activation</a>&nbsp;&nbsp;
            <a href="" className="fs-5">Intraday margins</a>&nbsp;&nbsp;
            <a href="" className="fs-5">Kite user manual</a>&nbsp;&nbsp;
        </div>
        <div className="col-6 p-3">
           <h1 className="fs-3 mt-3">Featured</h1>
           <ol>
            <li><a href="" className="fs-5" style={{lineHeight:"3.2"}}>Current Takeovers and Delisting - January 2024</a></li>
            <li><a href="" className="fs-5">Latest Intraday leverages - MIS & CO</a></li>
           </ol>  
        </div>
        
        </div>
    </section>
     );
}

export default Hero;