import React, { memo, useEffect, useState, useContext } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { SECTION } from '../../helpers/constants'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { SectionRefsContext } from '../../providers/section-refs'

const Header = memo(({ sectionRefs }: { sectionRefs: HTMLElement[] }): JSX.Element => {
  const [showMobileNavigationButton, setShowMobileNavigationButton] = useState<boolean>(window.innerWidth < 993)
  const [showMobileNavigation, setShowMobileNavigation] = useState<boolean>(false)

  const { visibleSectionId } = useContext(SectionRefsContext)

  const toggleMobileNavigation = async (): Promise<void> => {
    setShowMobileNavigation(prevState => {
      prevState ? document.body.classList.remove('overflow-hidden') : document.body.classList.add('overflow-hidden')
      return !prevState
    })
  }

  useEffect((): void => {
    window.addEventListener('resize', (): void => {
      setShowMobileNavigationButton(window.innerWidth < 993)
    })
  }, [])

  const mobileGroup = {
    hidden: { backgroundColor: ' color-mix(in srgb, var(--black), transparent 100%)' },
    show: { backgroundColor: ' color-mix(in srgb, var(--black), transparent 33%)', overflow: 'hidden' }
  }
  const mobileItem = {
    hidden: { x: 'calc(-100vw - 100px)' },
    show: { x: 0 }
  }

  const desktopItem = {
    hidden: { x: -350 },
    show: { x: 0 }
  }

  return (
    <header>
      <motion.div
        className="hidden sm:fixed sm:right-3 sm:top-3 sm:block rounded-full over"
        initial={{ backgroundColor: 'var(--white)' }}
        animate={{ backgroundColor: showMobileNavigation ? 'var(--complementary)' : 'var(--white)' }}
        transition={{
          duration: 0.3
        }}
        style={{
          zIndex: 9999
        }}
      >
        <button className="flex items-center justify-center opacity-100" onClick={toggleMobileNavigation}>
          <Hamburger direction="right" />
        </button>
      </motion.div>
      <nav className="fixed bottom-0 left-0 top-0 z-[999]">
        <motion.ul
          className="fixed flex h-screen flex-col justify-center sm:justify-end sm:pb-5 gap-7 pl-4 sm:px-4 sm:w-screen"
          initial="hidden"
          animate={(showMobileNavigation && showMobileNavigationButton) || !showMobileNavigationButton ? 'show' : 'hidden'}
          variants={showMobileNavigationButton ? mobileGroup : {}}
          transition={{
            duration: 0.75,
            staggerChildren: 0.15
          }}
        >
          {SECTION.map(({ title, icon }) => (
            <motion.li
              className={`w-[75px] h-[75px] ${showMobileNavigationButton ? 'w-full' : ''}`}
              key={title}
              variants={showMobileNavigationButton ? mobileItem : desktopItem}
              transition={{ duration: 0.3, type: 'spring' }}
            >
              <motion.button
                data-is-visible={visibleSectionId === title}
                className="text-primary w-full h-full flex items-center gap-5 overflow-hidden rounded-full pl-[17px] text-base"
                onClick={(): void => {
                  sectionRefs.find((el: HTMLElement) => el.id === title)?.scrollIntoView({ behavior: 'smooth' })
                  toggleMobileNavigation()
                }}
                style={{
                  width: showMobileNavigationButton ? '100%' : 75
                }}
                initial={{
                  color: visibleSectionId === title ? 'var(--white)' : 'var(--black)',
                  backgroundColor: visibleSectionId === title ? 'var(--complementary)' : 'var(--secondary)'
                }}
                transition={{ type: 'tween', stiffness: 20 }}
                whileHover={{
                  backgroundColor: 'var(--complementary)',
                  color: 'var(--white)',
                  width: showMobileNavigationButton ? '100%' : 175
                }}
              >
                <div>
                  <Icon icon={icon} height="40" />
                </div>
                <span className="open-sans inline-block text-lg">{title}</span>
              </motion.button>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
