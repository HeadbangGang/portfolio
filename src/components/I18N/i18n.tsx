import React from 'react'
// @ts-ignore
import * as allLocales from '../../helpers/locales/'
import LanguageDetector from 'i18next-browser-languagedetector'
import ReactMarkdown from 'react-markdown'
import XHR from 'i18next-http-backend'
import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'

interface LanguageMapInterface {
    resources: {
        en: any
    }
}

interface I18NProps extends LanguageMapVariableProps {
    blockLevel?: boolean
    className?: string,
    markdown?: boolean,
    name: string,
    target?: string
}

interface LanguageMapVariableProps {
    myName?: string
    years?: number
    year?: number
}

const mergedLanguageMap = { resources: {} } as LanguageMapInterface

Object.keys(allLocales).forEach(language => {
    mergedLanguageMap.resources[language] = {
        translation: { ...allLocales[language] }
    }
})

i18n
    .use(XHR)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        ...mergedLanguageMap,
        detection: {
            order: ['querystring', 'navigator'],
            lookupQuerystring: 'lng'
        },
        fallbackLng: {
            default: ['en']
        },
        interpolation: {
            escapeValue: false
        }
    })
    .then(() => {
        console.info(`Browser Language: ${i18n.language}`)
    })

const getCurrentLanguageMap = () => {
    const currentLangMap = mergedLanguageMap.resources[i18n.language]?.translation
    const enLangMap = mergedLanguageMap.resources.en.translation

    return currentLangMap ?? enLangMap
}

export const language = getCurrentLanguageMap()

export const changeCurrentLanguage = async (language, callback) => {
    i18n.changeLanguage(language)
        .then(() => {
            window.localStorage.setItem('preferredLanguage', language)
            callback && callback()
            console.info(`Language Changed: ${language}`)
        })
}

const I18N = (props: I18NProps) => {
    const { t } = useTranslation()

    const { blockLevel, className, markdown, name, target, ...options } = props

    const text = t(name, options)
    if (markdown) {
        return <ReactMarkdown className={ className } linkTarget={ target }>{ text }</ReactMarkdown>
    }
    if (blockLevel) {
        return <div className={ className }>{ text }</div>
    }
    return <span className={ className }>{ text }</span>
}

export default I18N
