import React, { memo, useRef, useEffect, useContext } from 'react'
import Typed from 'typed.js'
import { I_AM_STRINGS, SECTION_TITLE, SOCIAL_MEDIA } from '../../../helpers/constants'
import { Icon } from '@iconify/react'
import { SectionRefsContext } from '../../../providers/section-refs'
import { motion } from 'framer-motion'

const LandingPage = memo(() => {
  const typedRef = useRef(null)
  const landingPageRef = useRef(null)

  const { addSectionRef } = useContext(SectionRefsContext)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      backDelay: 2500,
      backSpeed: 75,
      loop: true,
      smartBackspace: true,
      strings: I_AM_STRINGS,
      typeSpeed: 50
    })

    addSectionRef(landingPageRef)

    return () => typed.destroy()
  }, [])

  return (
    <section id={SECTION_TITLE.HOME} className="flex h-screen flex-col justify-center" ref={landingPageRef}>
      <div className="flex flex-col justify-center gap-4 sm:items-center sm:text-center">
        <h1 className="text-6xl sm:text-4xl">Tayden Flitcroft</h1>
        <div className="typed-wrapper poppins text-2xl">
          I'm a <span ref={typedRef} />
        </div>
        <ul className="mt-5 flex gap-6">
          {SOCIAL_MEDIA.map((item, idx) => (
            <li key={item.title}>
              <motion.div initial={{ y: 30 }} animate={{ y: 0 }} transition={{ delay: 0.2 + idx * 0.1, type: 'spring' }}>
                <a rel="noreferrer" href={item.href} target="_blank">
                  <Icon icon={item.icon} height="25px" className="text-grey transition duration-300 ease-in-out hover:text-complementary" />
                </a>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
})

LandingPage.displayName = 'LandingPage'
export default LandingPage
