import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  render(<Home />)

  it('renders a heading with label', () => {
    const heading = screen.getByRole('heading', {
      name: /nextjs application/i,
    })
    expect(heading).toBeInTheDocument()
  })
})
