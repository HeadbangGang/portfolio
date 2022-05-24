import React, { createContext } from 'react'

export const BaseUrlContext = createContext(null)
BaseUrlContext.displayName = 'BaseUrl'

const BaseUrlProvider = ({ children }) => {

    const baseUrl = process.env.NODE_ENV === 'development' ? '/portfolio' : 'https://desolate-basin-78066.herokuapp.com/portfolio'

    return (
        <BaseUrlContext.Provider value={ baseUrl }>
            { children }
        </BaseUrlContext.Provider>
    )
}

export default BaseUrlProvider
