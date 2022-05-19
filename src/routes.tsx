import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PAGE_URL } from './helpers/helpers'
import Homepage from './components/homepage/homepage'
import Layout from './components/layout/layout'

interface RoutesInterface {
    element: React.ReactElement
    path: string
}

const RoutesController = () => {
    const ROUTES = [
        { element: <Homepage />, path: PAGE_URL.HOMEPAGE },
        { element: <Homepage />, path: '*' }
    ]

    const renderRoutes = () => {
        return ROUTES.map((data: RoutesInterface) => (
            <Route { ...data } key={ data.path }/>
        ))
    }

    return (
        <BrowserRouter basename={ PAGE_URL.HOMEPAGE }>
            <Layout>
                <Routes>
                    { renderRoutes() }
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default RoutesController
