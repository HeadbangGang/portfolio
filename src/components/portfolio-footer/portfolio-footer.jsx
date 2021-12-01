import React from 'react'
import './portfolio-footer.less'

export const PortfolioFooter = () => {
  const date = new Date()
  return (
    <footer>
      <div>
        <span>{ `© ${date.getFullYear()} Tayden Flitcroft` }</span>
      </div>
    </footer>
  )
}

export default PortfolioFooter
