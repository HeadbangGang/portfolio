import React, { useContext } from 'react'
import { UIViewContext } from '../../providers/ui'
import resumePdf from '../../media/resume.pdf'
import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core'
import { getFilePlugin } from '@react-pdf-viewer/get-file'
import { printPlugin } from '@react-pdf-viewer/print'
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen'
import '@react-pdf-viewer/print/lib/styles/index.css'
import '@react-pdf-viewer/full-screen/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import './resume.less'

export default function Resume () {
  const isSmallView = useContext(UIViewContext)

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
  const plugins = [getFilePluginInstance, printPluginInstance, fullScreenPluginInstance]

  return (
    <>
      <h1 className="resume-title">
        Resume/CV
      </h1>
      <div className="pdf-viewer__container">
        <div className="pdf-viewer__container-inner">
          { !isSmallView && <EnterFullScreenButton /> }
          <DownloadButton />
          <PrintButton />
        </div>
        <div className="pdf-viewer__document">
          <Viewer fileUrl={ resumePdf } plugins={ plugins } />
        </div>
      </div>
    </>
  )
}
