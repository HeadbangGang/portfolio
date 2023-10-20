import React, { useContext } from 'react'
import Header from './header'
import Footer from './footer'
import { Icon } from '@iconify/react'
import { SectionRefsContext } from '../../providers/section-refs'
import { SECTION_TITLE } from '../../helpers/constants'
import { motion } from 'framer-motion'

const PageLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { visibleSection, sectionRefs } = useContext(SectionRefsContext)

  return (
    <>
      <Header sectionRefs={sectionRefs} />
      {children}
      <Footer />
      <motion.button
        initial={{ y: 100 }}
        animate={{ y: visibleSection && visibleSection?.id !== SECTION_TITLE.HOME ? 0 : 100 }}
        transition={{
          stiffness: 200,
          type: 'spring'
        }}
        className="fixed bottom-3 right-3 z-[9999] flex h-11 w-11 items-center justify-center rounded-full bg-main text-white hover:opacity-80"
        onClick={(): void => {
          sectionRefs.find((el: HTMLElement) => el.id === SECTION_TITLE.HOME)?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <Icon icon="ph:arrow-up" height="25px" />
      </motion.button>
    </>
  )
}

export default PageLayout
