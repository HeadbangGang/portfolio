import { MAX_MESSAGE_LENGTH, MAX_SUBJECT_LENGTH } from './constants'
type ValidationRules = {
  [key: string]: {
    regex: RegExp
    errorMessage: string
  }
}

const validationRules: ValidationRules = {
  ['first-name']: {
    regex: /^[A-Za-z]+(?:[-' ][A-Za-z]+)*$/,
    errorMessage: 'Please enter a valid first name'
  },
  ['last-name']: {
    regex: /^[A-Za-z]+(?:[-' ][A-Za-z]+)*$/,
    errorMessage: 'Please enter a valid last name'
  },
  subject: {
    regex: new RegExp(`^.{1,${MAX_SUBJECT_LENGTH}}$`),
    errorMessage: 'Please enter a subject between 1 and 100 characters'
  },
  email: {
    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    errorMessage: 'Please enter a valid email address'
  },
  message: {
    regex: new RegExp(`^.{1,${MAX_MESSAGE_LENGTH}}$`),
    errorMessage: `Please enter a message between 1 and ${MAX_MESSAGE_LENGTH} characters`
  }
}

export default (id: string, value: string): string => {
  const { regex, errorMessage } = validationRules[id]

  return regex.test(value) ? '' : errorMessage
}
