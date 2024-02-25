import React, { useState } from 'react'
import Navbar from './componentes/Navbar'

function App() {

    const [theme, setTheme] = useState('light')



    return (
        <div className={`container ${theme}`}>
            <Navbar theme={theme} setTheme={setTheme}/>
        </div>
    )
}

export default App
