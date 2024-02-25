import React from 'react'
import './SubMenu.scss'
function Submenu() {
  return (
    <>
    <div className='options'>
        <a >Tools</a>
        <a >AWS Builder</a>
        <a >Start Build</a>
        <a >Build Supplies</a>
        <a >Tooling</a>
        <a >BlueHosting</a>
    </div>
    <div className='route'>
      <p>Home {'>'} </p>
      <p>Hosting for all {'>'}</p>
      <p>Hosting {'>'}</p>
      <p>Hosting 6 {'>'}</p>
      <p>Hosting 5 {'>'}</p>
    </div>
    </>
    
  )
}

export default Submenu