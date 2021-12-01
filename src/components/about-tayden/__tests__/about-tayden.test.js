import React from 'react'
import { render, screen } from 'test-utils'
import AboutTayden from '../about-tayden'

describe('<AboutTayden />', () => {
  it('should render <AboutTayden />', () => {
    render(<AboutTayden />)
    expect(screen.getByRole('heading', { name: /About Tayden Flitcroft/ })).toBeVisible()
    expect(screen.getAllByRole('img').length).toBe(1)
  })
})
