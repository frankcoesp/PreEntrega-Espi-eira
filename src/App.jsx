import React, { useState } from 'react'
import Navbar from './componentes/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {

    const [theme, setTheme] = useState('light')

    return (
        <div className={`container ${theme}`}>
            <Navbar theme={theme} setTheme={setTheme}/>
            <ItemListContainer greeting="Bienvenidos! "/>
        </div>
    )
}

export default App
