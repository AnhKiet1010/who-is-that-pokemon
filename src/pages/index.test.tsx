import { POKEMON_LIST_URL } from '@/config/API'
import { render, screen } from '@testing-library/react'

import Home from './index.page'

describe('トップページのテスト', () => {
  it('正しいテキストが表示される', () => {
    render(
      <Home
        fallback={{
          [POKEMON_LIST_URL]: [
            {
              name: 'フシギダネ',
              url: 'https://google.com',
            },
          ],
        }}
      />
    )

    expect(screen.getAllByRole('listitem')[0]).toBeTruthy()
  })
})
