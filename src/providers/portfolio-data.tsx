import React, {createContext, useContext, useEffect, useState} from 'react'
import {BaseUrlContext} from './base-url'
import {ProjectDataInterface} from '../interfaces'
import {fetchAsset} from '../helpers/fetchAsset'
import { useAuth0 } from '@auth0/auth0-react'

export const PortfolioDataContext = createContext(null)
PortfolioDataContext.displayName = 'PortfolioData'

const PortfolioDataProvider = ({ children }) => {
    const baseUrl = useContext(BaseUrlContext)
    const [projectData, setProjectData] = useState<ProjectDataInterface>({})
    const [pdfWorkerBlob, setPdfWorkerBlob] = useState<string>('')
    const [resumeBlob, setResumeBlob] = useState<string>('')

    const { getAccessTokenSilently } = useAuth0()

    const fetchProjectData = async () => {
        const accessToken = await getAccessTokenSilently()
        await fetch(`${baseUrl}/projects`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(res => res.json())
            .then(({ data }) => {
                setProjectData(data)
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
        fetchProjectData()
        fetchResumeData()
    }, [])

    const portfolioData = { projectData, pdfWorkerBlob, resumeBlob }

    return (
        <PortfolioDataContext.Provider value={ portfolioData }>
            { children }
        </PortfolioDataContext.Provider>
    )
}

export default PortfolioDataProvider
