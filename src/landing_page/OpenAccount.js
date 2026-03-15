import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
         <div className='row text-center'>
            <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
            <h1>Open a Zerodha account</h1>
            <p className='text-muted fs-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </p>
            <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"25%", margin:"0 auto"}}>Sign   up Now</button>
        </div>

       </div>
     );
}

export default OpenAccount;