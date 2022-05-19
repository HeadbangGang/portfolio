import React from 'react'
import Typed from 'typed.js'
import './typed-wrapper.scss'
import {I_AM_STRINGS} from '../../helpers/helpers'

interface TypedWrapperProps {
    strings?: string[]
    smartBackspace?: boolean
    typeSpeed?: number
    backSpeed?: number
    loop?: boolean
    backDelay?: number
}

const TypedWrapper = (props: TypedWrapperProps) => {

    React.useEffect(() => {
        new Typed('#typed', props)
    }, [])

    return <span id="typed" />
}

TypedWrapper.defaultProps = {
    strings: I_AM_STRINGS,
    smartBackspace: true,
    typeSpeed: 25,
    backSpeed: 50,
    loop: true,
    backDelay: 1500
}

export default TypedWrapper
