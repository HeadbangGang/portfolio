import React, {createContext, useEffect, useState} from 'react'
import { useLocation } from 'react-router'

export const NavigationContext = createContext(null)
NavigationContext.displayName = 'NavigationContext'

const NavigationProvider = ({ children }) => {
    const location = useLocation()
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(false)
    }, [location])

    return (
        <NavigationContext.Provider value={{ hasMounted, setHasMounted }}>
            { children }
        </NavigationContext.Provider>
    )
}

export default NavigationProvider
