import React, { memo } from 'react'
import LandingPage from './sections/landing-page'
import Resume from './sections/resume'

const MainContent = memo(() => {
  return (
    <main className="sm:pl-0 pl-60">
      <LandingPage />
      <Resume />
    </main>
  )
})

MainContent.displayName = 'MainContent'

export default MainContent
