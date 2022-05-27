import React, {createContext, useContext, useEffect, useState} from 'react'
import {BaseUrlContext} from './base-url'
import {ProjectDataInterface, ProjectDataObject} from '../interfaces'
import {fetchAsset} from '../helpers/fetchAsset'

export const PortfolioDataContext = createContext(null)
PortfolioDataContext.displayName = 'PortfolioData'

const PorfolioDataProvider = ({ children }) => {
    const baseUrl = useContext(BaseUrlContext)
    const [projectData, setProjectData] = useState<ProjectDataInterface>({})
    const [pdfWorkerBlob, setPdfWorkerBlob] = useState<string>('')
    const [resumeBlob, setResumeBlob] = useState<string>('')

    const fetchProjectData = async () => {
        await fetch(`${baseUrl}/projects`)
            .then(res => res.json())
            .then(res => {
                res.data.forEach(async (data:ProjectDataObject) => {
                    if (data.image) {
                        data.image = await fetchAsset(baseUrl, data.image)
                    }
                })
                setProjectData(res)
            })
            .catch(() => {})
    }

    const fetchResumeData = async () => {
        const resumeBlob = await fetchAsset(baseUrl, 'resume.pdf')
        const pdfWorkerBlob = await fetchAsset(baseUrl,'pdf-worker.min.js')
        setResumeBlob(resumeBlob)
        setPdfWorkerBlob(pdfWorkerBlob)
    }

    useEffect(() => {
        fetchResumeData()
        fetchProjectData()
    }, [])

    const portfolioData = { projectData, pdfWorkerBlob, resumeBlob }

    return (
        <PortfolioDataContext.Provider value={ portfolioData }>
            { children }
        </PortfolioDataContext.Provider>
    )
}

export default PorfolioDataProvider
