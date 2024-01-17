import React, { memo, useContext } from 'react'
import LandingPage from './sections/landing-page'
import Resume from './sections/resume'
import { QueryClient, QueryClientProvider } from 'react-query'
import Contact from './sections/contact'
import { RemoteConfigContext } from '../providers/remote-config'

interface Section {
  id: string
  component: (props?: { key: number }) => React.ReactElement
}

const MainContent = memo(() => {
  const { enabledSections } = useContext(RemoteConfigContext)
  const queryClient = new QueryClient()

  const sections: Section[] = [
    { id: 'home', component: props => <LandingPage {...props} /> },
    { id: 'resume', component: props => <Resume {...props} /> },
    { id: 'contact', component: props => <Contact {...props} /> }
  ]

  const renderEnabledSections = () => {
    return enabledSections.map((sectionId: string, idx: number) => {
      const sectionObj = sections.find(item => item.id === sectionId)
      if (sectionObj) {
        return (
          <div className="mb-7" key={idx}>
            {sectionObj.component()}
          </div>
        )
      }
    })
  }

  return (
    <main className="sm:pl-0 pl-60">
      <QueryClientProvider client={queryClient}>{renderEnabledSections()}</QueryClientProvider>
    </main>
  )
})

MainContent.displayName = 'MainContent'

export default MainContent
