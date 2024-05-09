import React from 'react'
import "./Navbar.css"
import TransactionItem from './TransactionItem'

function Navbare() {
  return (
    <div className='navbar-container'>
        <h1>The royal bank of moringa</h1>
        <TransactionItem />
    </div>
  )
}

export default Navbare
