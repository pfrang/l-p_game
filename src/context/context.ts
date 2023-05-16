import create from 'zustand'
import {  GameModeOptions } from '../utils/enums'

export const useDropdown = create((set) => ({
  dropdownChoice: 'Regel',
  setDropDownChoice: (e) => set(() => ({dropdownChoice: e})),
  // setFalse: () => set(state => true)
}))

export const useDisplayForm = create((set) => ({
  showFormState: false,
  showForm: () => set(() => ({showFormState: true})),
  hideForm: () => set(() => ({showFormState: false})),
}))

export const useChosenNormalGame = create((set) => ({
  gameNormal: false,
  setNormalGame: () => set(() => ({ gameNormal: true})),
  endNormalGame: () => set(() => ({ gameNormal: false})),
}))

export const useChosenMysteriousGame = create((set) => ({
  gameMystStart: false,
  setMystGame: () => set(() => ({ gameMystStart: true})),
  endMystGame: () => set(() => ({ gameMystStart: false})),
}))

export const useStartGame = create((set) => ({
  gameStart: false,
  setStartGame: () => set(() => ({ gameStart: true })),
  setEndGame: () => set(() => ({ gameStart: false })),
}))

export const useChosenOverratedGame = create((set) => ({
  gameOverratedStart: false,
  setGameOverratedStart: () => set(() => ({ setGameOverratedStart: true })),
  setGameOverratedEnd: () => set(() => ({ setGameOverratedEnd: false })),
}))


export const useSetGameMode = create((set) => ({
  gameMode: "Normal",
  setGameMode: (e: GameModeOptions) => set(() => ({ gameMode: e })),
}))

export type DropdownNumber = 1 | 2;
