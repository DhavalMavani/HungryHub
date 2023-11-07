import React from 'react'
import {Outlet} from 'react-router-dom'


function AboutUs() {
  return (
    <div>
        <h1>About Us</h1>
        <p>I knew you were trouble when you walked in </p>
        <Outlet />
    </div>
  )
}

export default AboutUs