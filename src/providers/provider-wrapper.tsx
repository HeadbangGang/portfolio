import React from 'react'
import UIProvider from './ui'
import PortfolioDataProvider from './portfolio-data'

const ProviderWrapper = ({ children }) => {
    return (
        <UIProvider>
            <PortfolioDataProvider>
                { children }
            </PortfolioDataProvider>
        </UIProvider>
    )
}

export default ProviderWrapper
