import React, {createContext, useContext, useState} from 'react'
import {BaseUrlContext} from './base-url'
import {ProjectDataInterface} from '../interfaces'

export const PortfolioDataContext = createContext(null)
PortfolioDataContext.displayName = 'PortfolioData'

const PorfolioDataProvider = ({ children }) => {
    const baseUrl = useContext(BaseUrlContext)
    const [projectData, setProjectData] = useState<ProjectDataInterface>({})

    const fetchProjectData = async () => {
        await fetch(`${baseUrl}/projects`)
            .then(res => res.json())
            .then(res => setProjectData(res))
            .catch(() => {})
    }

    const portfolioData = { projectData, fetchProjectData }

    return (
        <PortfolioDataContext.Provider value={ portfolioData }>
            { children }
        </PortfolioDataContext.Provider>
    )
}

export default PorfolioDataProvider
