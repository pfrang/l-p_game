import React, {useEffect} from 'react'
import Button from '../Buttons/button'
import { useDropdown } from '../context/context';
export default function GameDone(props) {

  const { dropdownChoice, setDropDownChoice } = useDropdown();

  const set = (e) => {
    setDropDownChoice(e)
  }

  const handleClick = () => {
    props.inc('',false,0, [])
    set('Regel')
  }

  return (
    <>
      <h1>Game done</h1>
      <div id="wrapper-game-done" className='flex items-center justify-center'>
        <Button onClick={handleClick} text='Play again?' />
      </div>
    </>
  )
}
