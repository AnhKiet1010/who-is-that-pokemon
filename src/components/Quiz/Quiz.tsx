import { FC } from 'react'
import { Stage, Layer, Image as CanvasImage } from 'react-konva'
import { POKEMON_BACK_IMG_URL } from '@/config/API'
import Konva from 'konva'
import { usePokemon } from '@/hooks/usePokemonList'
import React from 'react'
import useImage from 'use-image'
import { Image as KonvaImage } from 'konva/lib/shapes/Image'

const PokemonImage: FC<{ id: number }> = ({ id }) => {
  const [image] = useImage(`${POKEMON_BACK_IMG_URL}${id}.png`, 'anonymous')
  const imageRef = React.useRef<KonvaImage>(null)

  React.useEffect(() => {
    if (image) {
      imageRef.current!.cache()
    }
  }, [image])

  return <CanvasImage ref={imageRef} x={10} y={10} image={image} filters={[Konva.Filters.RGB]} blurRadius={10} />
}

const Quiz = () => {
  const randomPokemon = usePokemon()
  console.log(randomPokemon)
  return randomPokemon ? (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <PokemonImage id={randomPokemon.id} />
      </Layer>
    </Stage>
  ) : (
    <div></div>
  )
}

export default Quiz
