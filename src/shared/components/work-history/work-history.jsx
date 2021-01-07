import React from 'react'
import PropTypes from 'prop-types'



export default class WorkHistory extends React.Component {
    render () {
        
        return (
        <div id="work-history">
           <h2>
               Work History
           </h2>
           <dl>
               <dt>
                   <div>Associate Engineer I</div>
                   <div>Best Buy</div>
               </dt>
               <dt>
                   <div>Advanced Repair Agent</div>
                   <div>Geek Squad</div>
               </dt>
               <dt>
                   <div>Microsoft Expert</div>
                   <div>Best Buy</div>
               </dt>
               <dt>
                   <div>Apple Master</div>
                   <div>Best Buy</div>
               </dt>
               <dt>
                   <div>Shift Supervisor</div>
                   <div>Starbucks</div>
               </dt>
           </dl>
        </div>
        )
    }
}

WorkHistory.propTypes = {
}
