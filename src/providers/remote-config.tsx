import React, { createContext, useState, useEffect } from 'react'
import { fetchAndActivate, getValue } from 'firebase/remote-config'
import { remoteConfig } from '../helpers/firebase'

export const RemoteConfigContext = createContext(null)
RemoteConfigContext.displayName = 'EnabledSections'

const RemoteConfigProvider = ({ children }) => {
  const [enabledSections, setEnabledSections] = useState<string[]>([])

  useEffect(() => {
    fetchAndActivate(remoteConfig)
      .then(() => {
        console.log('Remote Config values fetched and activated!')
        const fetchedEnabledSections = getValue(remoteConfig, 'enabledSections')['_value']

        if (fetchedEnabledSections) {
          setEnabledSections(fetchedEnabledSections.split(','))
        }
      })
      .catch(error => {
        console.error('Error fetching or activating remote config: ', error)
      })
  })

  return <RemoteConfigContext.Provider value={{ enabledSections }}>{children}</RemoteConfigContext.Provider>
}

export default RemoteConfigProvider
