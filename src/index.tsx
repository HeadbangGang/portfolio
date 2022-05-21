import React from 'react'
import { createRoot } from 'react-dom/client'
import RoutesController from './routes'
import UIProvider from './providers/ui'
import NavigationProvider from './providers/navigation'
import {BrowserRouter} from 'react-router-dom'
import { PAGE_URL } from './helpers/helpers'
import './index.scss'

const root = createRoot(document.getElementById('portfolio'))

root.render(
    <BrowserRouter basename={ PAGE_URL.HOMEPAGE}>
        <UIProvider>
            <NavigationProvider>
                <RoutesController />
            </NavigationProvider>
        </UIProvider>
    </BrowserRouter>
)
