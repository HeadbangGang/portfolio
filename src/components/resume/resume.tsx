import React, {useContext, useEffect} from 'react'
import {NavigationContext} from '../../providers/navigation'

const Resume = () => {
    const { setHasMounted } = useContext(NavigationContext)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    return (
        <div>tayden</div>
    )
}

export default Resume
