import React from 'react'
import Typed from 'typed.js'

const TypedWrapper = (props) => {
    const elementRef = React.useRef(null)
    const typedRef = React.useRef(null)

    React.useEffect(() => {
        typedRef.current = new Typed(elementRef.current, props)
        return () => {
            typedRef.current.destroy()
        }
    }, [])

    return <span ref={ elementRef } />
}

TypedWrapper.defaultProps = {
    strings: ['Software Engineer', 'Developer', 'Computer Scientist', 'IT Professional', 'Technology Enthusiast'],
    smartBackspace: true,
    typeSpeed: 25,
    backSpeed: 50,
    loop: true,
    backDelay: 1500
}

export default TypedWrapper
