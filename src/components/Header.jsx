import React from 'react'
import { FiSearch } from "react-icons/fi";
import './Header.scss'
function Header() {
  return (
    <>
        <div className='main'>
            <input type="text" value="" />
            <FiSearch className='search'/>
            <p>Categories</p>
            <p>Website Builder</p>
            <p>Today's Deal</p>
        </div>
    </>
  )
}

export default Header