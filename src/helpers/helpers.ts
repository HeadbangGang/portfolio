import { toWords } from 'number-to-words'

export const PAGE_URL = {
    CONTACT: '/contact',
    HOMEPAGE: '/',
    PROJECTS: '/projects',
    RESUME: '/resume'
}

export const I_AM_STRINGS = ['Software Engineer', 'Developer', 'Computer Scientist', 'IT Professional', 'Technology Enthusiast']
export const SOCIAL_MEDIA_LOGOS = ['logo-github', 'logo-linkedin', 'logo-facebook', 'logo-twitter', 'mail']

export const TECHNOLOGIES_LOGOS = ['logos:typescript-icon', 'logos:jenkins', 'logos:react', 'logos:sass', 'bxl:github', 'logos:grunt', 'logos:handlebars', 'logos:nextjs', 'vscode-icons:file-type-node', 'logos:express']
export const TECHNOLOGIES_PER_ROW = 5

export const LOGO_URLS = {
    'logo-github': 'https://www.github.com/HeadbangGang',
    'logo-linkedin': 'https://www.linkedin.com/in/tayden-flitcroft/',
    'logo-facebook': 'https://www.facebook.com/tayden.flitcroftgoodeill',
    'logo-twitter': 'https://twitter.com/TaydenPaul',
    'mail': 'mailto:taydengoodeill@gmail.com'
}

export const SPINNER_DEFAULT = 750

export const MAX_MESSAGE_LENGTH = 300
export const LOW_CHARACTER_THRESHOLD = 25

export const isEmpty = (obj) => {
    return !!(obj === undefined || obj === null || typeof obj !== 'object' || !Object.keys(obj).length)
}

export const isiOS = () => {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
        || (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
}

export const scrollToId = (id) => {
    const { top } = document.getElementById(id).getBoundingClientRect()
    const location = window.scrollY + top - 76
    window.scrollTo({top: location, behavior: 'smooth'})
}

export const developmentExp = () => {
    const startDate = new Date('10/1/2020') as unknown as number
    const todaysData = new Date() as unknown as number
    const diffTime = Math.abs(startDate - todaysData)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return toWords(Math.ceil(diffDays / 365))
}
