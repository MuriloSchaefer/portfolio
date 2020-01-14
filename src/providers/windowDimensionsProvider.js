import React, { useEffect, useState, } from 'react'

export const WindowDimensionsContext = React.createContext({});
export const WindowDimensionsProvider = ({children}) => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(()=> {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)
        return () => {window.removeEventListener('resize', handleResize)}
    }, []);

    return (
        <WindowDimensionsContext.Provider value={dimensions}>
            {children}
        </WindowDimensionsContext.Provider>
    )
}