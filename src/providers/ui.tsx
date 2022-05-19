import React, {createContext, useEffect, useState} from 'react'

export const UIContext = createContext(null)
UIContext.displayName = 'UIContext'

const UIProvider = ({ children }) => {
    const [isSmallView, setIsSmallView] = useState<boolean>(window.innerWidth < 993)

    window.addEventListener('resize', () => {
        if ((isSmallView && window.innerWidth > 992) || (!isSmallView && window.innerWidth < 992)) {
            setIsSmallView(!isSmallView)
        }
    })

    return (
        <UIContext.Provider value={{ isSmallView }}>
            { children }
        </UIContext.Provider>
    )
}

export default UIProvider
