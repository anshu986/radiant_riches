import React from 'react'
import img from '../images/img.jpg'
import './Cards.scss'
function Cards() {
  return (
    <div className='card'>
    <div className="firstdiv">
        <img src={img} alt="" />
        <p>Builder 1</p>
    </div>
    <div className="seconddiv">
        <p> <b>WixPro 72-Inch Responsive Website Builder</b>-Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
        <p> <b>Main highlights</b></p>
        <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
        {/* description
        highlights
        hightlights */}
    </div>
    <div className="thirddiv">
       {/* rating 
        comment
        stars */}
        <div className='review'>
        <p className='rating'>9.8</p>
        <p>Exceptional</p>
        <p>stars</p>
        </div>
        <button>View</button>
        

    </div>
    </div>
  )
}

export default Cards