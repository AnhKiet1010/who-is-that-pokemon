import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}))

describe('ヘッダーのテスト', () => {
  // it('日本語版で正しいテキストが表示される', () => {
  //   render(<Header />)
  //   const text = screen.getByText('ポケモン だ〜れだ？')
  //   expect(text).toBeInTheDocument()
  // })
  // it('英語版で正しいテキストが表示される', () => {
  //   render(<Header />)
  //   const text = screen.getByText("Who's That Pokémon?")
  //   expect(text).toBeInTheDocument()
  // })
})
