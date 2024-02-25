import React from 'react'
import './Nabvar/Navbar.css'
import logo_light from '../../src/assets/images/logo_light.png'
import logo_dark from '../../src/assets/images/logo_dark.png'
import search_icon_dark from '../../src/assets/images/search-b.png'
import search_icon_light from '../../src/assets/images/search-w.png'
import toogle_light from '../../src/assets/images/day.png'
import toogle_dark from '../../src/assets/images/night.png'




function Navbar({theme,setTheme}) {

    const toogle_mode = ()=>{
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <div className='navbar'>
            <img src={theme == 'light' ? logo_light : logo_dark} alt="logo de TAP" className='logo'/>
            <ul>
                <li className=''>Principal</li>
                <li className=''>Contacto</li>
                <li className=''>nosotros</li>
                <li className=''>Productos</li>
            </ul>

        <div className='search-box'>
        <input type="text" placeholder='Search'/>
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="buscador" />
        </div>

        <img onClick={()=>{toogle_mode()} }  src={theme == 'light' ? toogle_dark : toogle_light} alt="modo" className='toggle-icon'/>
        </div>
    )
}

export default Navbar
