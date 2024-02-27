import React from 'react'
import './Signup.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Signup() {
  return (
    <>
    <div className='signup_div'>
    <div className='signup'>Sign up and get exclusive special deals</div>
    <div>
        <input type="text" className='inputbox'/>
        <button>Sign Up  </button>
    </div>
    </div>


    </>
  )
}

export default Signup