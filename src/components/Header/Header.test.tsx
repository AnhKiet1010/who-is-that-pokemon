import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('ヘッダーのテスト', () => {
  it('正しいテキストが表示される', () => {
    render(<Header />)

    const text = screen.getByText('Header')

    expect(text).toBeInTheDocument()
  })
})
