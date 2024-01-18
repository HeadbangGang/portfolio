import React, { memo, useState, useEffect } from 'react'
import validator from '../../helpers/validator'
import { Icon } from '@iconify/react'

const Input = memo(
  ({
    children,
    error,
    id,
    inputProps = {},
    labelProps = {},
    maxLength = Infinity,
    setValue,
    showCharacterCount = false,
    textArea = false,
    value
  }: {
    children: any
    error?: string
    id: string
    inputProps?: { className?: string; type?: string; autoComplete?: string }
    labelProps?: { className?: string }
    maxLength?: number
    setValue: (e: any) => void
    showCharacterCount?: boolean | number
    textArea?: boolean
    value: string
  }) => {
    const [characterCount, setCharacterCount] = useState<number>(0)
    const [labelClassNames, setLabelClassNames] = useState<string>(
      'raleway absolute left-1 top-2 origin-[0] -translate-y-4 scale-75 transform cursor-text bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-main'
    )
    const [sanitizedInputProps, setInputProps] = useState<Record<any, any>>({ type: 'text' })
    const [inputClassNames, setInputClassNames] = useState<string>(
      'w-full peer block appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-main focus:outline-none focus:ring-0'
    )
    const [errorMessage, setErrorMessage] = useState<string>(null)
    const [inputMaxLength, setInputMaxLength] = useState<number>(maxLength)

    const resizeOnInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const element = e.target as HTMLInputElement | HTMLTextAreaElement
      element.style.height = 'auto'
      element.style.height = element.scrollHeight + 'px'
    }

    const validation = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const element = e.target as HTMLInputElement | HTMLTextAreaElement
      setErrorMessage(validator(element.id, element.value))
    }

    const handleInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const element = e.target as HTMLInputElement | HTMLTextAreaElement
      setValue(element.value)
      setCharacterCount(element.value.length)
      if (!!errorMessage && !validator(element.id, element.value)) {
        setErrorMessage(null)
      }
    }

    const characterCountClass = (): string => {
      if (inputMaxLength === Infinity) return ''

      if (characterCount >= Math.floor(inputMaxLength * 0.75)) {
        if (characterCount >= inputMaxLength - Math.floor(inputMaxLength * 0.1)) {
          return 'text-red-500'
        }
        return 'text-yellow-500'
      }

      return ''
    }

    useEffect((): void => {
      setLabelClassNames(prevState => prevState + labelProps?.className)
      setInputClassNames(prevState => prevState + inputProps?.className)
      delete inputProps?.className
      setInputProps(prevState => ({ ...prevState, ...inputProps }))
      if (showCharacterCount && typeof showCharacterCount === 'number') {
        setInputMaxLength(showCharacterCount)
      }
    }, [])

    useEffect(() => {
      if (error) {
        setErrorMessage(error)
      }
    }, [error])

    return (
      <div className="flex w-full flex-col">
        <div className="relative w-full">
          {textArea ? (
            <textarea
              id={id}
              value={value}
              className={inputClassNames + 'resize-none'}
              maxLength={inputMaxLength}
              onBlur={validation}
              onInput={e => {
                handleInput(e)
                resizeOnInput(e)
              }}
              placeholder=" "
              style={{ resize: 'none' }}
            />
          ) : (
            <input
              {...sanitizedInputProps}
              id={id}
              value={value}
              className={inputClassNames}
              maxLength={inputMaxLength}
              onBlur={validation}
              onInput={handleInput}
              placeholder=" "
            />
          )}
          <label htmlFor={id} className={labelClassNames} {...labelProps}>
            {children}
          </label>
        </div>
        {errorMessage && (
          <div className="poppins flex items-center gap-2 pt-2 text-xs text-red-500">
            <Icon icon="material-symbols:error-outline-rounded" />
            {errorMessage}
          </div>
        )}
        {showCharacterCount && (
          <div className="poppins mt-2 text-right text-xs">
            <span className={characterCountClass()}>{characterCount}</span>
            {typeof showCharacterCount === 'number' && <span> / {showCharacterCount}</span>}
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
