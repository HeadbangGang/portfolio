import React, { memo, useContext } from 'react'
import LandingPage from './sections/landing-page'
import Resume from './sections/resume'
import { QueryClient, QueryClientProvider } from 'react-query'
import Contact from './sections/contact'
import { RemoteConfigContext } from '../providers/remote-config'

interface Section {
  id: string
  component: (props?: { key: any }) => React.ReactElement
}

const MainContent = memo(() => {
  const { enabledSections } = useContext(RemoteConfigContext)
  const queryClient = new QueryClient()

  const sections: Section[] = [
    { id: 'home', component: props => <LandingPage {...props} /> },
    { id: 'resume', component: props => <Resume {...props} /> },
    { id: 'contact', component: props => <Contact {...props} /> }
  ]

  const renderEnabledSections = () => sections.filter(({ id }) => enabledSections.includes(id)).map(({ component, id }) => component({ key: id }))

  return (
    <main className="sm:px-6 pl-60 pr-6">
      <QueryClientProvider client={queryClient}>{renderEnabledSections()}</QueryClientProvider>
    </main>
  )
})

MainContent.displayName = 'MainContent'

export default MainContent
