import React from 'react'
import resumePdf from '../../../media/resume.pdf'
import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core'

import { getFilePlugin } from '@react-pdf-viewer/get-file'
import { printPlugin } from '@react-pdf-viewer/print'
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen'

import '@react-pdf-viewer/print/lib/styles/index.css'
import '@react-pdf-viewer/full-screen/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function Resume () {
    const getFilePluginInstance = getFilePlugin({ fileNameGenerator: () => { return 'Flitcroft_Tayden_Resume' } })
    const { DownloadButton } = getFilePluginInstance
    const printPluginInstance = printPlugin()
    const { PrintButton } = printPluginInstance
    const fullScreenPluginInstance = fullScreenPlugin({
        onEnterFullScreen: (zoom) => {
            zoom(SpecialZoomLevel.PageFit)
        },
        onExitFullScreen: (zoom) => {
            zoom(SpecialZoomLevel.PageFit)
        }
    })
    const { EnterFullScreenButton } = fullScreenPluginInstance

    return (
        <div
            className="rpv-core__viewer"
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    padding: '4px',
                    justifyContent: 'flex-end'
                }}
            >
                <EnterFullScreenButton />
                <DownloadButton />
                <PrintButton />
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer fileUrl={ resumePdf } plugins={ [getFilePluginInstance, printPluginInstance, fullScreenPluginInstance] } />
            </div>
        </div>
    )
}
