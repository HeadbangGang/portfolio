import React, {useContext, useEffect, useState} from 'react'
import I18N from '../I18N/i18n'
import {validateEmail, validateName, validateSubject, validateMessage} from '../../helpers/validators'
import {Icon} from '@iconify/react'
import {getAccessToken, LOW_CHARACTER_THRESHOLD, MAX_MESSAGE_LENGTH} from '../../helpers/helpers'
import {UIContext} from '../../providers/ui'
import './contact.scss'

const Contact = () => {
    const [senderName, setSenderName] = useState<string>('')
    const [senderNameErrorMessage, setSenderNameErrorMessage] = useState<string>('')
    const [returnEmail, setReturnEmail] = useState<string>('')
    const [returnEmailErrorMessage, setReturnEmailErrorMessage] = useState<string>('')
    const [emailSubject, setEmailSubject] = useState<string>('')
    const [emailSubjectErrorMessage, setEmailSubjectErrorMessage] = useState<string>('')
    const [emailMessage, setEmailMessage] = useState<string>('')
    const [emailMessageErrorMessage, setEmailMessageErrorMessage] = useState<string>('')
    const [sendConfirmationEmail, setSendConfirmationEmail] = useState<boolean>(false)
    const [callInProgress, setCallInProgress] = useState<boolean>(false)
    const [formSubmitSuccess, setFormSubmitSuccess] = useState<boolean|null>(null)
    const [messagesSent, setMessagesSent] = useState<number>(0)

    const { isSmallView } = useContext(UIContext)

    const messageCharactersLeft = MAX_MESSAGE_LENGTH - emailMessage.length
    const lowRemainingCharacters = messageCharactersLeft <= LOW_CHARACTER_THRESHOLD

    const scrollToFirstError = () => document.getElementsByClassName('inline-error')?.[0]?.scrollIntoView({behavior: 'smooth', inline: 'center', block: 'center'})

    useEffect(() => {
        scrollToFirstError()
    }, [senderNameErrorMessage, returnEmailErrorMessage, emailMessageErrorMessage, emailSubjectErrorMessage])

    const validate = () => {
        const senderNameError = validateName(senderName)
        const returnEmailError = validateEmail(returnEmail)
        const emailSubjectError = validateSubject(emailSubject)
        const emailMessageError = validateMessage(emailMessage)

        if (senderNameError) setSenderNameErrorMessage(senderNameError)
        if (returnEmailError) setReturnEmailErrorMessage(returnEmailError)
        if (emailSubjectError) setEmailSubjectErrorMessage(emailSubjectError)
        if (emailMessageError) setEmailMessageErrorMessage(emailMessageError)

        scrollToFirstError()

        return !(senderNameError || returnEmailError || emailSubjectError || emailMessageError)
    }

    const handleSenderName = event => {
        const { value } = event.currentTarget
        senderNameErrorMessage && setSenderNameErrorMessage('')
        if (/^$|^[a-z ,.'-]+$/i.test(value)) {
            setSenderName(value)
        }
    }
    const handleEmailAddress = event => {
        returnEmailErrorMessage && setReturnEmailErrorMessage('')
        setReturnEmail(event.currentTarget.value)
    }
    const handleSubject = event => {
        emailSubjectErrorMessage && setEmailSubjectErrorMessage('')
        setEmailSubject(event.currentTarget.value)
    }
    const handleMessage = event => {
        emailMessageErrorMessage && setEmailMessageErrorMessage('')
        setEmailMessage(event.currentTarget.value)
    }

    const resetForm = () => {
        setSenderName('')
        setReturnEmail('')
        setEmailMessage('')
        setEmailSubject('')
    }

    const handleSendContactRequest = async (e) => {
        e.preventDefault()

        if (validate() && !formSubmitSuccess) {
            setCallInProgress(true)
            setMessagesSent(messagesSent + 1)
            const accessToken = await getAccessToken()
            await fetch(`${process.env.API_URL}/portfolio/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    emailSubject,
                    emailMessage,
                    returnEmail,
                    sendConfirmationEmail,
                    senderName
                })
            })
                .then(res => res.json())
                .then(({ emailSentSuccess }) => {
                    setFormSubmitSuccess(emailSentSuccess)
                    if (emailSentSuccess) {
                        resetForm()
                    }
                    setTimeout(() => setFormSubmitSuccess(null), 3000)
                })
                .catch(() => setFormSubmitSuccess(false))
                .finally(() => setCallInProgress(false))
        }
    }

    const renderSubmitButton = () => {
        if (callInProgress) {
            return (
                <button disabled type="submit">
                    <I18N blockLevel className="roll-down-1" name="contact.sending" />
                </button>
            )
        }
        if (formSubmitSuccess) {
            return (
                <button className="success" type="submit">
                    <div className="roll-down-1 sent-success">
                        <I18N name="contact.sentSuccess" />
                        <Icon icon="eva:checkmark-fill" width="20"/>
                    </div>
                </button>
            )
        }
        if (formSubmitSuccess === false && messagesSent) {
            return (
                <button className="success" type="submit">
                    <div className="roll-down-1 sent-success">
                        <I18N name="contact.sentFail" />
                        <Icon icon="akar-icons:circle-x-fill" width="20"/>
                    </div>
                </button>
            )
        }
        return (
            <button onClick={async (e: React.FormEvent) => handleSendContactRequest(e) } type="submit">
                <I18N blockLevel className="roll-up-1" name="contact.submit" />
            </button>
        )
    }

    const renderContactCards = () => {
        return [
            {icon: 'ant-design:phone-filled', name: 'contact.phoneNumber', href: 'tel:+1503-569-7894'},
            {icon: 'ion:mail', name: 'contact.email', href: 'mailto:contact@taydenflitcroft.com'},
            {icon: 'ci:location', name: 'contact.location'}
        ].map(({ href, icon, name}: {href?: string, icon: string, name: string}, idx: number) => {
            const animationClassname = isSmallView ? 'roll-up' : 'slide-right'
            return (
                <div className={`card ${animationClassname}-${idx + 2}`} key={ idx }>
                    <a href={href}>
                        <div className="card__content">
                            <Icon icon={icon} width="100"/>
                            <I18N blockLevel name={name}/>
                        </div>
                    </a>
                </div>
            )
        })
    }

    return (
        <div className="contact">
            <div className="contact__header">
                <I18N className="roll-down-1" markdown name="contact.header" />
                <I18N className="roll-down-2" markdown name="contact.subHeader" />
            </div>
            <form onSubmit={async (e:React.FormEvent) => await handleSendContactRequest(e) }>
                <div className="input-wrapper roll-up-1">
                    <input aria-label="full name" autoComplete="name" onChange={ handleSenderName } placeholder="Full Name" required value={senderName}/>
                    <InlineError errorMessage={ senderNameErrorMessage } />
                </div>
                <div className="input-wrapper roll-up-2">
                    <input aria-label="email address" autoComplete="email" onChange={ handleEmailAddress } placeholder="Email Address" required value={returnEmail}/>
                    <InlineError errorMessage={ returnEmailErrorMessage } />
                </div>
                <div className="input-wrapper roll-up-3">
                    <input aria-label="subject" onChange={ handleSubject } placeholder="Subject" required value={emailSubject}/>
                    <InlineError errorMessage={ emailSubjectErrorMessage } />
                </div>
                <div className="input-wrapper roll-up-4">
                    <textarea aria-label="message content" onChange={ handleMessage } placeholder="Message" maxLength={ MAX_MESSAGE_LENGTH } required value={emailMessage}/>
                    <div className={`message-content-counter ${lowRemainingCharacters ? 'low-count' : ''}`}>{messageCharactersLeft}</div>
                    <InlineError errorMessage={ emailMessageErrorMessage }/>
                </div>
                <div className="roll-up-5 copy-of-message">
                    <input checked={ sendConfirmationEmail } id="send-confirmation-email" onChange={() => setSendConfirmationEmail(!sendConfirmationEmail)} type="checkbox" />
                    <label htmlFor="send-confirmation-email">
                        <I18N className="uppercase" name="contact.copyOfMessage" />
                    </label>
                </div>
                <div className="roll-up-5">
                    { renderSubmitButton() }
                </div>
            </form>
            <div className="contact__cards">
                { renderContactCards() }
            </div>
        </div>
    )
}


export default Contact

const InlineError = ({ errorMessage }) => {
    if (!errorMessage) return null
    return (
        <div className="inline-error">
            <Icon icon="bxs:error-alt" />
            <I18N blockLevel name={ errorMessage } />
        </div>
    )
}
