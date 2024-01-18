import React, { memo, useContext, useEffect, useRef, useState } from 'react'
import { SECTION_TITLE } from '../../../helpers/constants'
import { SectionRefsContext } from '../../../providers/section-refs'
import getAccessToken from '../../../helpers/fetch-token'

const Resume = memo(() => {
  const resumeRef = useRef(null)
  const canvasRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true) // Add loading state

  const { addSectionRef } = useContext(SectionRefsContext)

  useEffect(() => {
    addSectionRef(resumeRef)
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    ;(async () => {
      const token = await getAccessToken()
      const pdfJS = await import('pdfjs-dist/build/pdf')
      pdfJS.GlobalWorkerOptions.workerSrc = window.location.origin + '/js/pdf.worker.min.js'
      const pdf = await pdfJS.getDocument({ url: `${process.env.API_URL}/portfolio/asset?fileName=resume.pdf`, httpHeaders: { Authorization: `Bearer ${token}` } }).promise
      const page = await pdf.getPage(1)
      const viewport = page.getViewport({ scale: 5 })

      canvas.height = viewport.height
      canvas.width = viewport.width

      page.render({ canvasContext: context, viewport })
      setIsLoading(false)
    })()
  }, [])

  return (
    <section id={SECTION_TITLE.RESUME} ref={resumeRef}>
      <h2>Resume</h2>
      {isLoading && <img src={require('../../../../assets/loading.gif')} alt="Loading..." className="loading-spinner" />}
      <canvas className={`border max-h-screen sm:w-full ${isLoading ? 'hidden' : ''}`} ref={canvasRef} />
    </section>
  )
})

Resume.displayName = 'Resume'

export default Resume
