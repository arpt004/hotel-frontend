import React from 'react'
import Weather from './weather'

const Navigation = () => {
  return (
    <div className='navigation'>
      <h1> Trilok Bhawan</h1>
      <ul>
        <li><a href='#' className='navigation-anchor'> Home </a></li>
        <li><a href='#' className='navigation-anchor'> Contact </a></li>
        <li><a href='#' className='navigation-anchor'> About </a></li>
      </ul>
      <Weather />
    </div>
  )
}

export default Navigation