import React from 'react'
import BaseUrlProvider from './base-url'
import NavigationProvider from './navigation'
import UIProvider from './ui'
import PorfolioDataProvider from './portfolio-data'

const ProviderWrapper = ({ children }) => {
    return (
        <BaseUrlProvider>
            <NavigationProvider>
                <UIProvider>
                    <PorfolioDataProvider>
                        { children }
                    </PorfolioDataProvider>
                </UIProvider>
            </NavigationProvider>
        </BaseUrlProvider>
    )
}

export default ProviderWrapper
