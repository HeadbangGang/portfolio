import React, {createContext, useContext, useEffect, useState} from 'react'
import {BaseUrlContext} from './base-url'
import {ProjectDataInterface} from '../interfaces'
import * as Url from 'url'

export const PortfolioDataContext = createContext(null)
PortfolioDataContext.displayName = 'PortfolioData'

const PorfolioDataProvider = ({ children }) => {
    const baseUrl = useContext(BaseUrlContext)
    const [projectData, setProjectData] = useState<ProjectDataInterface>({})
    const [pdfWorkerBlob, setPdfWorkerBlob] = useState<string>('')
    const [resumeBlob, setResumeBlob] = useState<string>('')

    useEffect(() => {
        fetch(`${baseUrl}/projects`, {
            headers: {
                'Referrer-Policy': 'unsafe-url'
            }
        })
            .then(res => res.json())
            .then(res => setProjectData(res))
            .catch(() => {})
        fetch(`${baseUrl}/asset?fileName=resume.pdf`)
            .then(res => res.blob())
            .then(res => setResumeBlob(URL.createObjectURL(res)))
            .catch(() => {})
        fetch(`${baseUrl}/asset?fileName=pdf-worker.min.js`)
            .then(res => res.blob())
            .then(res => setPdfWorkerBlob(URL.createObjectURL(res)))
            .catch(() => {})
    }, [])

    const portfolioData = { projectData, pdfWorkerBlob, resumeBlob }

    return (
        <PortfolioDataContext.Provider value={ portfolioData }>
            { children }
        </PortfolioDataContext.Provider>
    )
}

export default PorfolioDataProvider
