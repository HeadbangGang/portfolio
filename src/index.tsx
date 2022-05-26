import React from 'react'
import { createRoot } from 'react-dom/client'
import RoutesController from './routes'
import {BrowserRouter} from 'react-router-dom'
import { PAGE_URL } from './helpers/helpers'
import ProviderWrapper from './providers/provider-wrapper'

import './index.scss'

const root = createRoot(document.getElementById('portfolio'))

root.render(
    <BrowserRouter basename={ PAGE_URL.HOMEPAGE}>
        <ProviderWrapper>
            <RoutesController />
        </ProviderWrapper>
    </BrowserRouter>
)
