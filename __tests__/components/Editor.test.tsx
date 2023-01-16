import { render, screen } from '@testing-library/react'
import Editor from '@/components/Editor'

describe('Editor', () => {
  it('renders with default code', () => {
    render(
      <Editor
        initialCode="This is initial code"
        onChange={(code) => {
          console.log(code)
        }}
      />
    )
    const container = screen.getAllByText(/this is initial code/i)[0] as HTMLPreElement
    expect(container).toBeInTheDocument()
  })
})
