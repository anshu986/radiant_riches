import React from 'react'
import img from '../../images/img.jpg'
import './DealCard.scss'
function DealCard({name,
    discount,
    description,
    price,
    cost,
    off}) {
  return (
    <div className='deal'>
        <div className='dealcard'>
            <img src={img} alt="" />
            <p>
                <span className='discount'>{discount}% off </span>
                <span className='discount'>Limited time</span>
            </p>
            <p className='name'>{name}</p>
                <p className='description'>{description} </p>
                <p>
                    <span className='price'>${price}</span>
                    <span className='cost'>${cost}</span>
                    <span className='off'>{'('}{off}% Off{')'}</span>
                </p>
                <button>
                    View Deal
                </button>
        </div>
    </div>
  )
}

export default DealCard