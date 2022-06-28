import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent as gLogEvent} from 'firebase/analytics'

const firebaseConfig = {
    apiKey: 'AIzaSyApob5KnftxoULGxKE2pIV9UeBxGuuE-pQ',
    authDomain: 'portfolio-2198.firebaseapp.com',
    projectId: 'portfolio-2198',
    storageBucket: 'portfolio-2198.appspot.com',
    messagingSenderId: '695901436436',
    appId: '1:695901436436:web:42857357762b6ad2138501',
    measurementId: 'G-P2P3YXM4H5'
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export const logEvent = (eventName, eventData) => gLogEvent(analytics, eventName, eventData)
