import React, { createContext } from 'react'
import { useMediaQuery } from 'react-responsive'

export const UIViewContext = createContext()

export default function UIProvider ({ children }) {
  return (
    <UIViewProvider>
      { children }
    </UIViewProvider>
  )
}

const UIViewProvider = ({ children }) => {
  const isSmallView = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <UIViewContext.Provider value={ isSmallView }>
      { children }
    </UIViewContext.Provider>
  )
}
