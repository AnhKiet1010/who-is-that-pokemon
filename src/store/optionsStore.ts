import { atom } from 'recoil'

export const optionKeyList = ['image', 'size', 'flavorText', 'genera', 'type', 'number']

export type OptionKey = typeof optionKeyList[number]

type Options = { [K in OptionKey]: boolean }

const initialValue: Options = {
  image: true,
  size: false,
  flavorText: false,
  genera: false,
  type: false,
  number: false,
}

export const optionListStore = atom<Options>({
  key: 'optionListStore',
  default: initialValue,
})
