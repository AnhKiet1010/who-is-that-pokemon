import { render, screen } from '@testing-library/react'
import { POKEMON_LIST_URL } from 'config/API'
import Home from './index.page'

describe('トップページのテスト', () => {
  it('正しいテキストが表示される', () => {
    render(
      <Home
        fallback={{
          [POKEMON_LIST_URL]: [
            {
              name: '',
              url: '',
            },
          ],
        }}
      />
    )

    const heading = screen.getByRole('heading', {
      name: /Hello world!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
