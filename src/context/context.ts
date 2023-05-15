import create from 'zustand'
import { DropDownGameModes, GameModeOptions } from '../utils/enums'
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
export const useDisplayGame = create((set) => ({
  gameStart: false,
  setGame: () => set(() => ({gameStart: true})),
  endGame: () => set(() => ({ gameStart: false})),
}))
export const useDisplayMysteriousGame = create((set) => ({
  gameMystStart: false,
  setMystGame: () => set(() => ({ gameMystStart: true})),
  endMystGame: () => set(() => ({ gameMystStart: false})),
}))

export const useSetGameMode = create((set) => ({
  gameMode: "",
  setGameMode: (e: GameModeOptions) => set(() => ({ gameMode: e })),
}))

export type DropdownNumber = 1 | 2;

export const useDisplaySecondDropdown = create((set) => ({
  dropdownNr: 0,
  setDropdownNr: (number: DropdownNumber) => set(() => ({ dropdownNr: number })),
}))
