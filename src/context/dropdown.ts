import create from 'zustand'
export const useDropdown = create((set) => ({
  dropdownChoice: 'Rule',
  setDropDownChoice: (e) => set(() => ({dropdownChoice: e})),
  // setFalse: () => set(state => true)
}))
export const useDisplayForm = create((set) => ({
  formState: false,
  showForm: () => set(() => ({formState: true})),
  hideForm: () => set(() => ({formState: false})),
}))
