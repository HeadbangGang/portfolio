import React, {useContext} from 'react'
import { SpecialZoomLevel, Worker, Viewer } from '@react-pdf-viewer/core'
import { fullScreenPlugin, RenderEnterFullScreenProps } from '@react-pdf-viewer/full-screen'
import { zoomPlugin, RenderZoomInProps, RenderZoomOutProps } from '@react-pdf-viewer/zoom'
import { getFilePlugin, RenderDownloadProps } from '@react-pdf-viewer/get-file'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/zoom/lib/styles/index.css'
import I18N from '../I18N/i18n'
import {PortfolioDataContext} from '../../providers/portfolio-data'
import SuspenseLoader from '../suspense-loader/suspense-loader'
import './resume.scss'
import {isiOS} from '../../helpers/helpers'
import { Icon } from '@iconify/react'

const Resume = () => {
    const { pdfWorkerBlob, resumeBlob } = useContext(PortfolioDataContext)

    const zoomPluginInstance = zoomPlugin()
    const { ZoomIn, ZoomOut } = zoomPluginInstance

    const getFilePluginInstance = getFilePlugin({ fileNameGenerator: () => 'Flitcroft_Tayden-Software-Engineer.pdf' })
    const { Download } = getFilePluginInstance

    const fullScreenPluginInstance = fullScreenPlugin({
        onEnterFullScreen: (zoom) => {
            zoom(SpecialZoomLevel.PageFit)
        },
        onExitFullScreen: (zoom) => {
            zoom(SpecialZoomLevel.PageFit)
        }
    })

    if (!(resumeBlob && pdfWorkerBlob)) return <SuspenseLoader />

    return (
        <div className="resume">
            <I18N className="roll-down-2" markdown name="resume.header" />
            <I18N className="roll-down-3 uppercase" markdown name="resume.subHeader" />
            <I18N className="roll-down-4 uppercase" markdown name="resume.contactMe" />
            <div className="pdf-container roll-up-4">
                <Worker workerUrl={ pdfWorkerBlob }>
                    <Viewer fileUrl={ resumeBlob } plugins={[fullScreenPluginInstance, zoomPluginInstance, getFilePluginInstance]} />
                </Worker>
            </div>
            <div className="pdf-container__toolbar">
                { !isiOS() && <FullScreenButton EnterFullScreen={fullScreenPluginInstance.EnterFullScreen}/> }
                <ZoomInButton ZoomIn={ ZoomIn }/>
                <ZoomOutButton ZoomOut={ ZoomOut }/>
                <DownloadButton Download={ Download }/>
            </div>
        </div>
    )
}

const FullScreenButton = ({ EnterFullScreen }) => {
    return (
        <EnterFullScreen>
            {(props: RenderEnterFullScreenProps) => (
                <button onClick={props.onClick}>
                    <Icon icon="bi:arrows-fullscreen" />
                    <I18N name="resume.fullScreen" />
                </button>
            )}
        </EnterFullScreen>
    )
}

const DownloadButton = ({ Download }) => {
    return (
        <Download>
            {(props: RenderDownloadProps) => (
                <button onClick={props.onClick}>
                    <Icon icon="bi:cloud-download" />
                    <I18N name="resume.download" />
                </button>
            )}
        </Download>
    )
}

const ZoomInButton = ({ZoomIn}) => {
    return (
        <ZoomIn>
            {(props: RenderZoomInProps) => (
                <button onClick={props.onClick}>
                    <Icon icon="akar-icons:zoom-in" />
                </button>
            )}
        </ZoomIn>
    )
}

const ZoomOutButton = ({ZoomOut}) => {
    return (
        <ZoomOut>
            {(props: RenderZoomOutProps) => (
                <button
                    onClick={props.onClick}
                >
                    <Icon icon="akar-icons:zoom-out" />
                </button>
            )}
        </ZoomOut>
    )
}

export default Resume
