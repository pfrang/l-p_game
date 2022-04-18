import React from 'react'
import Button from '../Buttons/button'
export default function GameDone(props) {
  const handleClick = () => {
    props.inc('',false, '',0, [])
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
