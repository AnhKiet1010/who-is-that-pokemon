import { levelStore } from '@/store/levelStore'
import { useRecoilState } from 'recoil'

export const useLevel = () => {
  const [level, setLevel] = useRecoilState(levelStore)

  return { level, setLevel }
}
