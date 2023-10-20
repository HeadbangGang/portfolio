import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import PageLayout from './components/template'
import VisibleSectionProvider from './providers/section-refs'
import MainContent from './components/main-content'
import { QueryClient, QueryClientProvider } from 'react-query'
import './styles/global.scss'

const client = new QueryClient()

const root = createRoot(document.querySelector('#portfolio'))

root.render(
  <QueryClientProvider client={client}>
    <BrowserRouter basename="/">
      <VisibleSectionProvider>
        <PageLayout>
          <MainContent />
        </PageLayout>
      </VisibleSectionProvider>
    </BrowserRouter>
  </QueryClientProvider>
)
