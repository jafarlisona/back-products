import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add-page">Add</NavLink> 
      </div>
    </nav>
  )
}

export default Navbar