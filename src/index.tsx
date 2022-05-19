import React from 'react'
import { createRoot } from 'react-dom/client'
import RoutesController from './routes'
import UIProvider from './providers/ui'
import './index.scss'

const root = createRoot(document.getElementById('portfolio'))

root.render(
    <UIProvider>
        <RoutesController />
    </UIProvider>
)
