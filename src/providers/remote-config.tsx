import React, { createContext, useState, useEffect } from 'react'
import { fetchAndActivate, getValue } from 'firebase/remote-config'
import { remoteConfig } from '../helpers/firebase'

interface PersonalInfo {
  email: string
  phoneNumber: string
  address: {
    city: string
    state: string
  }
}

export const RemoteConfigContext = createContext(null)
RemoteConfigContext.displayName = 'RemoteConfig'

const RemoteConfigProvider = ({ children }) => {
  const [enabledSections, setEnabledSections] = useState<string[]>([])
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(null)

  useEffect((): void => {
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        setEnabledSections(JSON.parse(remoteConfig.defaultConfig.enabledSections as string))
        setPersonalInfo(JSON.parse(remoteConfig.defaultConfig.personalInfo as string))
      }, 1500)

      return
    }

    fetchAndActivate(remoteConfig)
      .then(() => {
        const fetchedEnabledSections = getValue(remoteConfig, 'enabledSections').asString()
        const fetchedPersonalInfo = getValue(remoteConfig, 'personalInfo').asString()

        if (fetchedEnabledSections) {
          setEnabledSections(JSON.parse(fetchedEnabledSections))
          setPersonalInfo(JSON.parse(fetchedPersonalInfo))
        }
      })
      .catch(error => {
        console.error('Error fetching or activating remote config: ', error)
      })
  }, [])

  return <RemoteConfigContext.Provider value={{ enabledSections, personalInfo }}>{children}</RemoteConfigContext.Provider>
}

export default RemoteConfigProvider
