import React from 'react'
import PropTypes from 'prop-types'
import resumePdf from '../../media/resume.pdf'
import { SpecialZoomLevel, Viewer } from '@react-pdf-viewer/core'
import './resume.less'

import { getFilePlugin } from '@react-pdf-viewer/get-file'
import { printPlugin } from '@react-pdf-viewer/print'
import { fullScreenPlugin } from '@react-pdf-viewer/full-screen'

import '@react-pdf-viewer/print/lib/styles/index.css'
import '@react-pdf-viewer/full-screen/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function Resume (props) {
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
    <div className="pdf-viewer__container">
      <div className="pdf-viewer__container-inner">
        { !props.isSmallView && <EnterFullScreenButton /> }
        <DownloadButton />
        <PrintButton />
      </div>
      <div className="pdf-viewer__document">
        <Viewer fileUrl={ resumePdf } plugins={ plugins } />
      </div>
    </div>
  )
}

Resume.propTypes = {
  isSmallView: PropTypes.bool
}
