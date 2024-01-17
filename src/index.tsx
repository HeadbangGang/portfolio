import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import PageLayout from './components/template'
import VisibleSectionProvider from './providers/section-refs'
import MainContent from './components/main-content'
import './styles/global.scss'

const root = createRoot(document.querySelector('#portfolio'))

root.render(
  <BrowserRouter basename="/">
    <VisibleSectionProvider>
      <PageLayout>
        <MainContent />
      </PageLayout>
    </VisibleSectionProvider>
  </BrowserRouter>
)
