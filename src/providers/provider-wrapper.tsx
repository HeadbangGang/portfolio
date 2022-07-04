import React from 'react'
import BaseUrlProvider from './base-url'
import UIProvider from './ui'
import PortfolioDataProvider from './portfolio-data'

const ProviderWrapper = ({ children }) => {
    return (
        <BaseUrlProvider>
            <UIProvider>
                <PortfolioDataProvider>
                    { children }
                </PortfolioDataProvider>
            </UIProvider>
        </BaseUrlProvider>
    )
}

export default ProviderWrapper
