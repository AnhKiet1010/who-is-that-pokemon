import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
    }
  },
}))

describe('ヘッダーのテスト', () => {
  it('正しいテキストが表示される', () => {
    render(<Header />)
    const text = screen.getByText('header')
    expect(text).toBeInTheDocument()
  })
})
