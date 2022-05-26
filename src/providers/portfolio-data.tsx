import React, {createContext, useContext, useEffect, useState} from 'react'
import {BaseUrlContext} from './base-url'
import {ProjectDataInterface} from '../interfaces'

export const PortfolioDataContext = createContext(null)
PortfolioDataContext.displayName = 'PortfolioData'

const PorfolioDataProvider = ({ children }) => {
    const baseUrl = useContext(BaseUrlContext)
    const [projectData, setProjectData] = useState<ProjectDataInterface>({})
    const [pdfWorkerUrl, setPdfWorkerUrl] = useState<string>('')
    const [resumePdfUrl, setResumePdfUrl] = useState<string>('')

    useEffect(() => {
        fetch(`${baseUrl}/projects`)
            .then(res => res.json())
            .then(res => setProjectData(res))
            .catch(() => {})
        fetch(`${baseUrl}/asset?fileName=resume.pdf`)
            .then(res => res.json())
            .then(({ url }) => setResumePdfUrl(url))
            .catch(() => {})
        fetch(`${baseUrl}/asset?fileName=pdf-worker.min.js`)
            .then(res => res.json())
            .then(({ url }) => setPdfWorkerUrl(url))
            .catch(() => {})
    }, [])

    const portfolioData = { projectData, pdfWorkerUrl, resumePdfUrl }

    return (
        <PortfolioDataContext.Provider value={ portfolioData }>
            { children }
        </PortfolioDataContext.Provider>
    )
}

export default PorfolioDataProvider
