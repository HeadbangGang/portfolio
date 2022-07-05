import React, {createContext, useContext, useEffect, useState} from 'react'
import {BaseUrlContext} from './base-url'
import {ProjectDataInterface} from '../interfaces'
import {fetchAsset} from '../helpers/fetchAsset'
import { getAccessToken, isEmpty } from '../helpers/helpers'

export const PortfolioDataContext = createContext(null)
PortfolioDataContext.displayName = 'PortfolioData'

const PortfolioDataProvider = ({ children }) => {
    const { baseUrl, awsClientData } = useContext(BaseUrlContext)
    const [projectData, setProjectData] = useState<ProjectDataInterface>({})
    const [pdfWorkerBlob, setPdfWorkerBlob] = useState<string>('')
    const [resumeBlob, setResumeBlob] = useState<string>('')

    const fetchProjectData = async () => {
        const accessToken = await getAccessToken(awsClientData)
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
        const resumeBlob = await fetchAsset(baseUrl, 'resume.pdf', awsClientData)
        const pdfWorkerBlob = await fetchAsset(baseUrl,'pdf-worker.min.js', awsClientData)
        setResumeBlob(resumeBlob)
        setPdfWorkerBlob(pdfWorkerBlob)
    }

    useEffect(() => {
        if (!isEmpty(awsClientData)) {
            fetchProjectData()
            fetchResumeData()
        }
    }, [awsClientData])

    const portfolioData = { projectData, pdfWorkerBlob, resumeBlob }

    return (
        <PortfolioDataContext.Provider value={ portfolioData }>
            { children }
        </PortfolioDataContext.Provider>
    )
}

export default PortfolioDataProvider
