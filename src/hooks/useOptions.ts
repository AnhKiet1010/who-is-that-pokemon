import { OptionKey, optionListStore } from '@/store/optionsStore'
import { useRecoilState } from 'recoil'

export const useOptions = () => {
  const [options, setOptions] = useRecoilState(optionListStore)

  const setOption = (key: OptionKey) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [key]: !prevOptions[key],
    }))
  }

  return { options, setOption }
}
