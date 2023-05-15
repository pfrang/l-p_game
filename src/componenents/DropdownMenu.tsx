import React, {  useState } from 'react'
import Dropdown from 'react-dropdown';
import { useDropdown, useDisplayForm, useDisplayGame, useSetGameMode, DropdownNumber, useDisplaySecondDropdown } from '../context/context';
import { DropDownGameModes, DropDownOptions } from '../utils/enums';

interface DropDownMenuProps {
  displayToolTip?: boolean
}

export default function DropdownMenu({displayToolTip }: DropDownMenuProps) {

  const { dropdownChoice, setDropDownChoice } = useDropdown();

  const { gameStart, setGame, endGame } = useDisplayGame();
  const { gameMode, setGameMode } = useSetGameMode()

  return (
    <div className='relative w-1/2 m-auto content-center'>
      <DropDownPicker  />
      {displayToolTip && (
        <div className='absolute bottom--10'>
        <svg width="10" className='inline' height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.00004 13.6153H3.00004V12.282H7.00004V13.6153ZM7.00004 11.6153H3.00004L2.85137 10.282C2.77139 9.84096 2.63912 9.41104 2.45737 9.00132C2.22137 8.66799 1.97537 8.38332 1.73737 8.10532C1.30446 7.69954 0.9572 7.21116 0.716065 6.66901C0.474931 6.12686 0.344809 5.54191 0.333374 4.94866C0.333374 3.71098 0.825039 2.52399 1.70021 1.64883C2.57538 0.773655 3.76236 0.28199 5.00004 0.28199C6.23772 0.28199 7.4247 0.773655 8.29987 1.64883C9.17504 2.52399 9.66671 3.71098 9.66671 4.94866C9.65328 5.5384 9.52305 6.11963 9.28354 6.65872C9.04403 7.1978 8.70001 7.68405 8.27137 8.08932L8.26004 8.10266C8.00767 8.38958 7.76938 8.6886 7.54604 8.99866C7.36445 9.40947 7.23176 9.8402 7.15071 10.282L7.00004 11.6153ZM5.00004 1.61532C4.11631 1.61638 3.26908 1.96791 2.64419 2.5928C2.0193 3.2177 1.66777 4.06493 1.66671 4.94866C1.66671 5.97799 2.09604 6.47732 2.74537 7.23399C2.99204 7.52199 3.27204 7.84732 3.54537 8.22799C3.8771 8.87254 4.10373 9.56594 4.21671 10.282H5.78404C5.89993 9.56801 6.12619 8.87641 6.45471 8.23199C6.72137 7.85132 7.00071 7.52399 7.24671 7.23599L7.25671 7.22399C7.90471 6.46399 8.33337 5.96199 8.33337 4.94866C8.33232 4.06493 7.98079 3.2177 7.35589 2.5928C6.731 1.96791 5.88377 1.61638 5.00004 1.61532V1.61532Z" fill="#354351" />
        </svg>
        <p id="dropdown-hint" className='inline pl-2'>{gameStart ? `Spiller nå ${dropdownChoice}` : "Velg ditt type spill"}</p>
      </div>
        )}
    </div>
  )
}


export const DropDownPicker = (): JSX.Element => {

  const { gameMode, setGameMode } = useSetGameMode()
  const { dropdownChoice, setDropDownChoice } = useDropdown();


  const { dropdownNr, setDropdownNr } = useDisplaySecondDropdown();

  const [isOpen, setIsOpen ] = useState(false);

  const setDropdown = (index: number, up: boolean) => {
    !up ? setDropdownNr(index) : setDropdownNr(0);
  }


  switch(gameMode) {
    case DropDownGameModes.Normal:
      return (
        <Dropdown onChange={(e) => setDropDownChoice(e.value)} className='rotate-3 m-auto my-3 z-10'
          placeholder={DropDownOptions.Rule}
          options={options.normal}
           />
      )
    default:
      return (
      <>
          <Dropdown onChange={(e) => setGameMode(e.value)} className={`rotate-3 m-auto my-3 z-10 ${dropdownNr && dropdownNr !== 1 && 'opacity-0 pointer-events-none'}`}
          placeholder={DropDownGameModes.Normal}
          options={options.chooseMode}
          onFocus={(e) => setDropdown(1, e)}
        />
          <Dropdown onChange={(e) => setGameMode(e.value)} className={`rotate-3 m-auto my-3 z-10 ${dropdownNr && dropdownNr !== 2 && 'opacity-0 pointer-events-none'}`}
          placeholder={DropDownGameModes.Normal}
          options={options.chooseMode}
          onFocus={(e) => setDropdown(2, e)}
        />
      </>
      )
  }
}

const options = {
  normal: [DropDownOptions.Rule, DropDownOptions.Dilemma, DropDownOptions.Pointing, DropDownOptions.Trivia, DropDownOptions.Mix],
  chooseMode: [DropDownGameModes.Normal, DropDownGameModes.SendIn, DropDownGameModes.OverUnderVurdert]

}
