import React from 'react'
// import img from ''
import img from '../../images/img.jpg'
import './Cards.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IoDiamondOutline } from "react-icons/io5";
import { GrTrophy } from "react-icons/gr";
function Cards({ id,
  name,
  description,
  highlights,
  pointersHighlights,
  features,
  rating,
  comment,
  star}) {
  return (
    <>
          <div className={id ===1 ? 'bestdeal' : 'disable'}><GrTrophy className='bestdealicon'/>  Best Choice</div>
          <div className={id ===2 ? 'bestdeal' : 'disable'}><IoDiamondOutline className='bestdealicon'/>  Best Value</div>
          <div className='card'>
    
    <p className='number'>{id}</p>
    <div className="firstdiv">
        <img src={img} alt="" />
        <p>Builder 1</p>
    </div>
    <div className="seconddiv">
        <p> <b>{name}</b>-{description}</p>
        <p> <b>Main highlights</b></p>
       {highlights===""? (<div className='highlight'>
          <p>
            <span>{pointersHighlights[0][0]} </span> {pointersHighlights[0][1]} 
          </p>
          <p>
          <span>{pointersHighlights[1][0]} </span> {pointersHighlights[1][1]} 
          </p>
          <p>
          <span>{pointersHighlights[2][0]} </span> {pointersHighlights[2][1]} 

          </p>
        </div>):<p>[What You Get]: {highlights}</p>}
        
        {/* description
        highlights
        hightlights */}

{features===""?(
  ""
):<div>Why we love it
        <p><CheckCircleIcon className='circle-icon'/> 
        Documentation</p>
        <p><CheckCircleIcon className='circle-icon'/>  Easy Use</p>
        <p> <CheckCircleIcon className='circle-icon'/> Out of Box</p>
        </div>     
   }
        <a href="">Show more <KeyboardArrowDownIcon className='downicon'/></a>
    </div>
    <div className="thirddiv">
       {/* rating 
        comment
        stars */}
        <div className='review'>
        <p className='rating'>{rating}</p>
        <p>{comment}</p>
        <p>
        <img src={star} alt="" />
        </p>
        </div>
        <button>View</button>
  
    </div>
    
    </div>
    </>
   
  )
}

export default Cards