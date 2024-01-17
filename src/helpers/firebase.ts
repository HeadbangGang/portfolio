import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getRemoteConfig, getValue } from 'firebase/remote-config'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'portfolio-2198.firebaseapp.com',
  projectId: 'portfolio-2198',
  storageBucket: 'portfolio-2198.appspot.com',
  messagingSenderId: '695901436436',
  appId: '1:695901436436:web:42857357762b6ad2138501',
  measurementId: 'G-P2P3YXM4H5'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const remoteConfig = getRemoteConfig(app)
remoteConfig.defaultConfig = require(`./config/${process.env.NODE_ENV}.json`)
