import React, { memo, useContext, useEffect, useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { SECTION } from '../../helpers/constants'
import { Icon } from '@iconify/react'
import { motion, useAnimation } from 'framer-motion'
import { RemoteConfigContext } from '../../providers/remote-config'

const Header = memo(({ sectionRefs }: { sectionRefs: HTMLElement[] }): JSX.Element => {
  const [showMobileNavigationButton, setShowMobileNavigationButton] = useState<boolean>(window.innerWidth < 993)
  const [showMobileNavigation, setShowMobileNavigation] = useState<boolean>(false)

  const { enabledSections } = useContext(RemoteConfigContext)

  const controls = useAnimation()

  const toggleMobileNavigation = async (): Promise<void> => {
    setShowMobileNavigation(prevState => !prevState)

    await controls.start({ backgroundColor: ['white', 'var(--complementary)'] })
  }

  useEffect((): (() => void) => {
    const handleResize = (): void => {
      setShowMobileNavigationButton(window.innerWidth < 993)
    }

    window.addEventListener('resize', handleResize)
    return (): void => {
      window.removeEventListener('rezsize', handleResize)
    }
  }, [])

  const animationClass = (): string => {
    if (showMobileNavigationButton) {
      if (showMobileNavigation) {
        return 'translate-x-full'
      }
      return '-translate-x-full'
    }
    return ''
  }

  if (!enabledSections.length) return null

  return (
    <header>
      <motion.div
        className="hidden sm:fixed sm:right-3 sm:top-3 sm:block rounded-full"
        initial={{ backgroundColor: 'var(--white)' }}
        animate={{ backgroundColor: showMobileNavigation ? 'var(--complementary)' : 'var(--white)' }}
        transition={{
          duration: 0.3,
          repeatType: 'reverse'
        }}
      >
        <button className="flex items-center justify-center opacity-100" onClick={toggleMobileNavigation}>
          <Hamburger direction="right" />
        </button>
      </motion.div>
      <nav className={`fixed bottom-0 left-0 top-0 z-[999] transition-all duration-300 ease-linear sm:-left-[300px] sm:w-[300px] ${animationClass()}`}>
        <motion.ul className="fixed flex h-screen flex-col justify-center gap-7 pl-4 sm:w-[calc(100vw/1.5)] sm:max-w-[300px] sm:border-r sm:border-gray-400 sm:bg-white sm:pr-4">
          {SECTION.map(({ title, icon, id }) => {
            if (enabledSections.find((enabledId: string) => enabledId === id)) {
              return (
                <motion.li
                  animate={{ x: 0 }}
                  className={`h-[65px] ${showMobileNavigationButton ? 'w-full' : 'w-[65px]'}`}
                  initial={{ x: -200 }}
                  key={title}
                  transition={{
                    duration: 1,
                    type: 'spring'
                  }}
                >
                  <motion.button
                    className="text-primary w-full h-full flex items-center gap-5 overflow-hidden rounded-full pl-3 text-base"
                    onClick={(): void => {
                      sectionRefs.find((el: HTMLButtonElement) => el.id === title)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    style={{
                      width: showMobileNavigationButton ? '100%' : 65
                    }}
                    initial={{
                      color: 'var(--black)',
                      backgroundColor: 'var(--secondary)'
                    }}
                    transition={{ type: 'spring', ease: 'linear', stiffness: 90, duration: 0.5 }}
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
              )
            }
          })}
        </motion.ul>
      </nav>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
