import React from 'react'
import { render, screen } from 'test-utils'
import PortfolioFooter from '../portfolio-footer'

describe('<PortfolioHeader />', () => {
  it('should render <PortfolioHeader />', () => {
    render(<PortfolioFooter />)
    expect(screen.getAllByRole('banner').length).toBe(1)
    expect(screen.getByText(/© 2021 Tayden Flitcroft/)).toBeVisible()
  })
})
