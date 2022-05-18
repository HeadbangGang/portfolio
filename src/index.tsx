import React from 'react'
import { createRoot } from 'react-dom/client'
import RoutesController from './routes'
import Layout from './components/layout/layout'

const root = createRoot(document.getElementById('portfolio'))

root.render(
    <Layout>
        <RoutesController />
    </Layout>
)
