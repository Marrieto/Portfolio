import React, { useEffect, useState } from 'react'
import './App.css'
import Name from '../Name/Name'

const App = (props) => {
    const [width, setWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <div className="App">
            <Name fontSize={width / 12} name="Martin Lindahl" />
        </div>
    )
}

export default App
