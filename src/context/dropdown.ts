import create from 'zustand'
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
export const useDisplay2ndGame = create((set) => ({
  showAltGame: false,
  showGame: () => set(() => ({showAltGame: true})),
  hideGame: () => set(() => ({ showAltGame: false})),
}))
