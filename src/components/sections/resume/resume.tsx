import React, { memo, useContext, useEffect, useRef } from 'react'
import { SECTION_TITLE } from '../../../helpers/constants'
import { SectionRefsContext } from '../../../providers/section-refs'
import getAccessToken from '../../../helpers/fetch-token'
import { useQuery } from 'react-query'
import fetchResume from '../../../helpers/fetch-resume'

const Resume = memo(() => {
  const resumeRef = useRef(null)
  const canvasRef = useRef(null)

  const { addSectionRef } = useContext(SectionRefsContext)

  const { data: token, isLoading: isTokenLoading } = useQuery('accessToken', getAccessToken)
  const {
    data: resume,
    isLoading: isResumeLoading,
    isError: resumeFetchingError
  } = useQuery(['resume', token], fetchResume, {
    enabled: !!token && !isTokenLoading
  })

  useQuery(
    'renderResume',
    async (): Promise<void> => {
      const pdfJS = await import('pdfjs-dist/build/pdf')
      pdfJS.GlobalWorkerOptions.workerSrc = window.location.origin + '/js/pdf.worker.min.js'
      const pdf = await pdfJS.getDocument(resume).promise
      const page = await pdf.getPage(1)
      const viewport = page.getViewport({ scale: 5 })

      const canvas = canvasRef.current
      const canvasContext = canvas.getContext('2d')
      canvas.height = viewport.height
      canvas.width = viewport.width

      page.render({ canvasContext, viewport })
    },
    {
      enabled: !resumeFetchingError && !isResumeLoading && !!resume
    }
  )

  useEffect(() => {
    addSectionRef(resumeRef)
  }, [])

  return (
    <section id={SECTION_TITLE.RESUME} ref={resumeRef}>
      <canvas className="border" ref={canvasRef} style={{ maxHeight: '100vh', maxWidth: '100vw' }} />
    </section>
  )
})

Resume.displayName = 'Resume'

export default Resume
