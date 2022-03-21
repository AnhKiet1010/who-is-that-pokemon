import { POKEMON_URL } from '@/config/API'
import { render, screen } from '@testing-library/react'

import Home from './index.page'

describe('トップページのテスト', () => {
  it('正しいテキストが表示される', () => {
    render(
      <Home
        fallback={{
          [POKEMON_URL]: [
            {
              name: 'voltorb',
              id: 100,
              height: 5,
              weight: 104,
              pokemon_v2_pokemonspecy: {
                pokemon_v2_pokemonspeciesnames: [
                  {
                    name: 'ビリリダマ',
                  },
                ],
                pokemon_v2_pokemonspeciesflavortexts: [
                  {
                    flavor_text:
                      'モンスターボールがうりだされたのとおなじじきにはっけんされた。なにかかんけいがあるといわれる。',
                  },
                ],
              },
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    pokemon_v2_typenames: [
                      {
                        name: 'でんき',
                      },
                    ],
                  },
                },
              ],
            },
          ],
        }}
      />
    )

    expect(screen.getAllByRole('listitem')[0]).toBeTruthy()
  })
})
