import React from 'react'
import './Footer.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-col col1 '>
        <h3 >CATEGORIES</h3>
        <p>Web Builder</p>
        <p>Hosting</p>
        <p>Data Center</p>
        <p>Robotic-Automation</p>
        </div>
        <div className='footer-col col2'>
            <h3>CONTACT</h3>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Terms Of Service</p>
            <p>Categories</p>
            <p>About</p>
        </div>
        <div className='footer-col col3'>United States <KeyboardArrowDownIcon className='footericon'/></div>
    </div>
  )
}

export default Footer