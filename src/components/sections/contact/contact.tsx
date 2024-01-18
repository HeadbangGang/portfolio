import React, { useContext, useEffect, useState, useRef, FormEvent } from 'react'
import { Icon } from '@iconify/react'
import { SectionRefsContext } from '../../../providers/section-refs'
import { MAX_MESSAGE_LENGTH, MAX_SUBJECT_LENGTH, SECTION_TITLE } from '../../../helpers/constants'
import Input from '../../shared/input'
import validator from '../../../helpers/validator'
import getAccessToken from '../../../helpers/fetch-token'
import { RemoteConfigContext } from '../../../providers/remote-config'
import { formatPhoneNumber } from '../../../helpers/formatters'

interface FormData {
  email: string
  firstName: string
  lastName: string
  message: string
  subject: string
}

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  message: '',
  subject: ''
}

enum FormSubmissionState {
  'ERROR',
  'SUBMITTING',
  'INITIAL',
  'SUCCESS'
}

const Contact = () => {
  const contactRef = useRef(null)

  const [data, setData] = useState<FormData>(initialState)
  const [errorMessages, setErrorMessages] = useState<FormData>(initialState)
  const [formSubmissionState, setFormSubmissionState] = useState<FormSubmissionState>(FormSubmissionState.INITIAL)
  const [formHasBeenSubmitted, setFormHasBeenSubmitted] = useState<boolean>(false)

  const { addSectionRef } = useContext(SectionRefsContext)
  const { personalInfo } = useContext(RemoteConfigContext)

  const scrollToFirstError = (): void => {
    const inputs = [
      { id: 'first-name', error: errorMessages.firstName },
      { id: 'last-name', error: errorMessages.lastName },
      { id: 'email', error: errorMessages.email },
      { id: 'subject', error: errorMessages.subject },
      { id: 'message', error: errorMessages.message }
    ]

    const idx = inputs.findIndex((item: { id: string; error: string }) => !!item.error)

    if (idx > -1) {
      const { id } = inputs[idx]

      const element = document.getElementById(id) as HTMLInputElement

      element?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'center'
      })
      element?.focus()
    }
  }

  const validate = (): boolean => {
    const tempErrorMessages = {
      email: validator('email', data.email),
      firstName: validator('first-name', data.firstName),
      lastName: validator('last-name', data.lastName),
      message: validator('message', data.message),
      subject: validator('subject', data.subject)
    }

    setErrorMessages(tempErrorMessages)

    return !Object.values(tempErrorMessages).filter(item => !!item).length
  }

  const submitContactForm = async (e: FormEvent): Promise<void> => {
    e.preventDefault()

    if (validate()) {
      setFormSubmissionState(FormSubmissionState.SUBMITTING)

      const token = await getAccessToken().catch((err: any) => {
        console.error(err)
        setFormSubmissionState(FormSubmissionState.ERROR)
      })

      if (token) {
        try {
          const res = await fetch(`${process.env.API_URL}/portfolio/contact`, {
            method: 'POST',
            body: JSON.stringify({
              emailMessage: data.message,
              returnEmail: data.email,
              senderName: `${data.firstName} ${data.lastName}`,
              sendConfirmationEmail: true,
              emailSubject: data.subject
            }),
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${token}`
            }
          })

          if (res.ok) {
            setFormSubmissionState(FormSubmissionState.SUCCESS)
            setFormHasBeenSubmitted(true)
          } else {
            setFormSubmissionState(FormSubmissionState.ERROR)
          }
        } catch (err: any) {
          console.error(err)
          setFormSubmissionState(FormSubmissionState.ERROR)
        }
      } else {
        setFormSubmissionState(FormSubmissionState.ERROR)
        return
      }
    }
  }

  useEffect((): void => {
    addSectionRef(contactRef)
  }, [])

  useEffect(() => {
    if (Object.values(errorMessages).find(item => !!item)) {
      scrollToFirstError()
    }
  }, [errorMessages])

  return (
    <section id={SECTION_TITLE.CONTACT} ref={contactRef}>
      <h2>Contact Me</h2>
      <div className="flex justify-around gap-3 sm:flex-col sm:gap-10">
        <div className="flex flex-col sm:w-fit sm:self-start">
          <a
            href={`https://maps.google.com/?q=${personalInfo.address.city}, ${personalInfo.address.state}`}
            target="_blank"
            className="open-sans group flex items-center gap-4 text-lg"
            rel="noreferrer"
          >
            <Icon
              className="rounded-full border border-transparent bg-accent p-3 transition duration-300 ease-in-out group-hover:bg-main group-hover:text-white"
              height="60"
              icon="material-symbols:location-on-outline"
            />
            <span className="text-gray-600">
              {personalInfo.address.city}, {personalInfo.address.state}
            </span>
          </a>
          <a className="open-sans group my-11 flex items-center gap-4 text-lg" href={`mailto:${personalInfo.email}`}>
            <Icon
              className="rounded-full border border-transparent bg-accent p-3 transition duration-300 ease-in-out group-hover:bg-main group-hover:text-white"
              height="60"
              icon="mdi:email-outline"
            />
            <span className="text-gray-600"> {personalInfo.email} </span>
          </a>
          <a href={`tel:${personalInfo.phoneNumber}`} className="open-sans group flex items-center gap-4 text-lg">
            <Icon
              className="rounded-full border border-transparent bg-accent p-3 transition duration-300 ease-in-out group-hover:bg-main group-hover:text-white"
              height="60"
              icon="material-symbols:phone-android-outline-rounded"
            />
            <span className="text-gray-600"> {formatPhoneNumber(personalInfo.phoneNumber)} </span>
          </a>
        </div>
        <form className="flex w-full max-w-2xl flex-col gap-4 sm:max-w-full" onSubmit={submitContactForm}>
          <div className="flex w-full gap-5 sm:flex-col">
            <Input
              error={errorMessages.firstName}
              id="first-name"
              inputProps={{ autoComplete: 'given-name' }}
              setValue={value => {
                setData(prevState => ({ ...prevState, firstName: value }))
              }}
              value={data.firstName}
            >
              First Name
            </Input>
            <Input
              error={errorMessages.lastName}
              id="last-name"
              inputProps={{ autoComplete: 'family-name' }}
              setValue={value => {
                setData(prevState => ({ ...prevState, lastName: value }))
              }}
              value={data.lastName}
            >
              Last Name
            </Input>
          </div>
          <Input
            error={errorMessages.email}
            id="email"
            inputProps={{ autoComplete: 'email' }}
            setValue={value => {
              setData(prevState => ({ ...prevState, email: value }))
            }}
            value={data.email}
          >
            Email Address
          </Input>
          <Input
            error={errorMessages.subject}
            id="subject"
            maxLength={MAX_SUBJECT_LENGTH}
            setValue={value => {
              setData(prevState => ({ ...prevState, subject: value }))
            }}
            value={data.subject}
          >
            Subject
          </Input>
          <Input
            error={errorMessages.message}
            id="message"
            showCharacterCount={MAX_MESSAGE_LENGTH}
            setValue={value => {
              setData(prevState => ({ ...prevState, message: value }))
            }}
            textArea
            value={data.message}
          >
            Message
          </Input>

          {/* Submit Button */}
          <div className="flex justify-end">
            {formSubmissionState === FormSubmissionState.SUBMITTING && (
              <button className="raleway my-4 flex h-10 min-w-[220px] cursor-progress items-center justify-center rounded-lg bg-grey text-white sm:w-full" disabled>
                <div className="roll-up"> Sending... </div>
              </button>
            )}

            {formSubmissionState === FormSubmissionState.SUCCESS && (
              <button className="raleway my-4 flex h-10 min-w-[220px] cursor-not-allowed items-center justify-center rounded-lg bg-main text-white sm:w-full" disabled>
                <div className="roll-down flex items-center justify-center">
                  <span className="pr-2"> Successfully Sent </span>
                  <Icon icon="eva:checkmark-fill" width="20" />
                </div>
              </button>
            )}

            {formSubmissionState === FormSubmissionState.ERROR && (
              <button className="raleway my-4 flex h-10 min-w-[220px] cursor-not-allowed items-center justify-center rounded-lg bg-red-500 text-white sm:w-full" disabled>
                <div className="roll-down flex items-center justify-center">
                  <span className="pr-2"> Error Occurred. Try Again. </span>
                  <Icon icon="akar-icons:circle-x-fill" width="20" />
                </div>
              </button>
            )}

            {formSubmissionState === FormSubmissionState.INITIAL && (
              <button
                className="raleway my-4 flex h-10 min-w-[220px] items-center justify-center rounded-lg bg-complementary text-white transition duration-300 ease-in-out hover:opacity-80 sm:w-full"
                type="submit"
              >
                <span className={formHasBeenSubmitted ? 'roll-down' : 'roll-up'}>Send Message</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
