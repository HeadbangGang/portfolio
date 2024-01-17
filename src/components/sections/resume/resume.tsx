import React, { memo, useContext, useEffect, useRef } from 'react'
import { SECTION_TITLE } from '../../../helpers/constants'
import { SectionRefsContext } from '../../../providers/section-refs'
import getAccessToken from '../../../helpers/fetch-token'

const Resume = memo(() => {
  const resumeRef = useRef(null)
  const canvasRef = useRef(null)

  const { addSectionRef } = useContext(SectionRefsContext)

  useEffect(() => {
    addSectionRef(resumeRef)
    ;(async () => {
      const token = await getAccessToken()

      const pdfJS = await import('pdfjs-dist/build/pdf')
      pdfJS.GlobalWorkerOptions.workerSrc = window.location.origin + '/js/pdf.worker.min.js'
      const pdf = await pdfJS.getDocument({ url: `${process.env.API_URL}/portfolio/asset?fileName=resume.pdf`, httpHeaders: { Authorization: `Bearer ${token}` } }).promise
      const page = await pdf.getPage(1)
      const viewport = page.getViewport({ scale: 5 })

      const canvas = canvasRef.current
      const canvasContext = canvas.getContext('2d')
      canvas.height = viewport.height
      canvas.width = viewport.width

      page.render({ canvasContext, viewport })
    })()
  }, [])

  return (
    <section id={SECTION_TITLE.RESUME} ref={resumeRef}>
      <canvas className="border" ref={canvasRef} style={{ maxHeight: '100vh', maxWidth: '100vw' }} />
    </section>
  )
})

Resume.displayName = 'Resume'

export default Resume
