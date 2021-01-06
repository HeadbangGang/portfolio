import React from 'react'
import PropTypes from 'prop-types'



export default class PortfolioHeader extends React.Component {
    render () {
        
        return (
        <div>
            <h1>
                Tayden Flitcroft
                <span>
                <button onClick={ () => console.log('Resume')}>Resume</button>
                </span>
            </h1>
            <button onClick={ () => console.log('Home')}>Home</button>
            <button onClick={ () => console.log('Work History')}>Work History</button>
            <button onClick={ () => console.log('Contact')}>Contact</button>
        </div>
        )
    }
}

PortfolioHeader.propTypes = {
}
