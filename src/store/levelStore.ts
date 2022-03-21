import { atom } from 'recoil'

export const levelKeyList = ['初級', '中級', '上級', '超上級']

export type LevelKey = typeof levelKeyList[number]

export const levelStore = atom<LevelKey | undefined>({
  key: 'levelStore',
  default: undefined,
})
