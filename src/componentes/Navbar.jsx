import React from 'react'
import './Nabvar/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <img src="" alt="" className='logo'/>
            <ul>
                <li className=''>Home</li>
                <li className=''>Contact</li>
                <li className=''>About us</li>
                <li className=''>Products</li>
            </ul>

        <div className='search-box'>
        <input type="text" placeholder='Search'/>
        <img src="" alt="" />
        </div>

        </div>
    )
}

export default Navbar
