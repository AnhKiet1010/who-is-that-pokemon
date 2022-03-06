import { render, screen } from '@testing-library/react'
import Home from './index.page'

describe('トップページのテスト', () => {
  it('正しいテキストが表示される', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Hello world!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
