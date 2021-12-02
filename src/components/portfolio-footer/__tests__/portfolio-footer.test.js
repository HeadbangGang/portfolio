import React from 'react'
import { render, screen } from 'test-utils'
import PortfolioFooter from '../portfolio-footer'

describe('<PortfolioFooter />', () => {
  it('should render <PortfolioFooter />', () => {
    render(<PortfolioFooter />)
    expect(screen.getByText(/© 2021 Tayden Flitcroft/)).toBeVisible()
  })
})
