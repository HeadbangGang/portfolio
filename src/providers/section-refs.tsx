import React, { createContext, useEffect, useState } from 'react'
import { SECTION_TITLE } from '../helpers/constants'

export const SectionRefsContext = createContext(null)
SectionRefsContext.displayName = 'SectionRefs'

const isSectionVisible = (el: HTMLElement): boolean => {
  if (!el) return false
  const rect = el.getBoundingClientRect()
  return rect.bottom > 0 && rect.right > 0 && rect.left < window.innerWidth && rect.top < window.innerHeight * 0.5 // Mark as "visible" when section is in top 50% of window
}

const SectionRefsProvider = ({ children }): JSX.Element => {
  const [sectionRefs, setSectionRefs] = useState<HTMLElement[]>([])
  const [visibleSection, setVisibleSection] = useState<HTMLElement>(null)
  const [visibleSectionId, setVisibleSectionId] = useState<string>(SECTION_TITLE.HOME)

  const setVisibleSectionElement = (): void => {
    const visibleSection = sectionRefs.find(ref => isSectionVisible(ref))
    setVisibleSectionId(visibleSection.id)
    setVisibleSection(visibleSection)
  }

  useEffect((): (() => void) => {
    if (sectionRefs.length) {
      window.addEventListener('scroll', setVisibleSectionElement)
      return () => {
        window.removeEventListener('scroll', setVisibleSectionElement)
      }
    }
  }, [sectionRefs.length])

  const addSectionRef = (ref: React.RefObject<HTMLElement>): void => {
    setSectionRefs(prevState => [...prevState, ref.current])
  }

  return <SectionRefsContext.Provider value={{ sectionRefs, addSectionRef, visibleSection, visibleSectionId }}>{children}</SectionRefsContext.Provider>
}

export default SectionRefsProvider
