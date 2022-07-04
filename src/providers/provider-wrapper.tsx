import React from 'react'
import BaseUrlProvider from './base-url'
import UIProvider from './ui'
import PortfolioDataProvider from './portfolio-data'
import { Auth0Provider } from '@auth0/auth0-react'

const ProviderWrapper = ({ children }) => {
    return (
        <Auth0Provider
            domain='dev-fsldf8y6.us.auth0.com'
            clientId='u29QhNWSYI7CpCbLkEk9cnxLm91qFkgo'
        >
            <BaseUrlProvider>
                <UIProvider>
                    <PortfolioDataProvider>
                        { children }
                    </PortfolioDataProvider>
                </UIProvider>
            </BaseUrlProvider>
        </Auth0Provider>
    )
}

export default ProviderWrapper
