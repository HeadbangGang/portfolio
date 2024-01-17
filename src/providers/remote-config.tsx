import React, { createContext, useState, useEffect } from 'react'
import { fetchAndActivate, getValue } from 'firebase/remote-config'
import { remoteConfig } from '../helpers/firebase'

export const RemoteConfigContext = createContext(null)
RemoteConfigContext.displayName = 'EnabledSections'

const RemoteConfigProvider = ({ children }) => {
  const [enabledSections, setEnabledSections] = useState<string[]>([])

  useEffect((): void => {
    if (process.env.NODE_ENV === 'development') {
      setEnabledSections(JSON.parse(remoteConfig.defaultConfig.enabledSections as string))
      return
    }

    fetchAndActivate(remoteConfig)
      .then(() => {
        const fetchedEnabledSections = getValue(remoteConfig, 'enabledSections')

        console.log(fetchedEnabledSections.getSource())
        console.log(fetchedEnabledSections.asString())

        if (fetchedEnabledSections) {
          setEnabledSections(JSON.parse(fetchedEnabledSections.asString()))
        }
      })
      .catch(error => {
        console.error('Error fetching or activating remote config: ', error)
      })
  }, [])

  return <RemoteConfigContext.Provider value={{ enabledSections }}>{children}</RemoteConfigContext.Provider>
}

export default RemoteConfigProvider
