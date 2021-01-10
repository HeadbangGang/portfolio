import React from 'react'



export default class LanguageMap extends React.Component {
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
            <button onClick={ () => console.log('Contact')}>Contact</button>
            <button onClick={ () => console.log('Work History')}>Work History</button>

        </div>
        )
    }
}