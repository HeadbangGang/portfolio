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

  const enabledSectionsComponents = sections.filter(({ id }) => enabledSections.includes(id)).map(({ component, id }) => component({ key: id }))

  const renderContent = () => {
    if (enabledSectionsComponents.length) {
      return enabledSectionsComponents
    }
    return (
      <div className="h-screen flex items-center justify-center">
        <img src={require('../../assets/loading.gif')} alt="loading" />
      </div>
    )
  }

  return (
    <main className={`sm:pl-6 px-6 ${enabledSectionsComponents.length ? 'pl-60' : ''}`}>
      <QueryClientProvider client={queryClient}>{renderContent()}</QueryClientProvider>
    </main>
  )
})

MainContent.displayName = 'MainContent'

export default MainContent
