import React, {useContext, useEffect} from 'react'
import { SpecialZoomLevel, Worker, Viewer } from '@react-pdf-viewer/core'
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen'
import { zoomPlugin } from '@react-pdf-viewer/zoom'
import { getFilePlugin } from '@react-pdf-viewer/get-file'
import {NavigationContext} from '../../providers/navigation'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/zoom/lib/styles/index.css'
import I18N from '../I18N/i18n'
import {PortfolioDataContext} from '../../providers/portfolio-data'
import './resume.scss'
import SuspenseLoader from '../suspense-loader/suspense-loader'

const Resume = () => {
    const { setHasMounted } = useContext(NavigationContext)
    const { pdfWorkerBlob, resumeBlob } = useContext(PortfolioDataContext)

    useEffect(() => {
        if (resumeBlob && pdfWorkerBlob) {
            setHasMounted(true)
        }
    }, [])

    const fullScreenPluginInstance = fullScreenPlugin({
        onEnterFullScreen: (zoom) => {
            zoom(SpecialZoomLevel.PageFit)
        },
        onExitFullScreen: (zoom) => {
            zoom(SpecialZoomLevel.PageFit)
        }
    })
    const zoomPluginInstance = zoomPlugin()
    const getFilePluginInstance = getFilePlugin({ fileNameGenerator: () => { return 'Flitcroft_Tayden-Software-Engineer' } })
    const { EnterFullScreenButton } = fullScreenPluginInstance
    const { ZoomInButton, ZoomOutButton } = zoomPluginInstance
    const { DownloadButton } = getFilePluginInstance

    if (!resumeBlob || !pdfWorkerBlob) return <SuspenseLoader />

    return (
        <div className="resume">
            <I18N className="roll-down-2" markdown name="resume.header" />
            <I18N className="roll-down-3 uppercase" markdown name="resume.subHeader" />
            <I18N className="roll-down-4 uppercase" markdown name="resume.contactMe" />
            <div className="pdf-container roll-up-4">
                <Worker workerUrl={ pdfWorkerBlob }>
                    <div className="pdf-container__toolbar">
                        <div>
                            <EnterFullScreenButton />
                        </div>
                        <div>
                            <ZoomInButton />
                            <ZoomOutButton />
                        </div>
                        <div>
                            <DownloadButton />
                        </div>
                    </div>
                    <Viewer fileUrl={ resumeBlob } plugins={[fullScreenPluginInstance, zoomPluginInstance, getFilePluginInstance]} />
                </Worker>
            </div>
        </div>
    )
}

export default Resume
