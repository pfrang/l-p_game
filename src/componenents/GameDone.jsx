import React from 'react'

export default function GameDone(props) {
  const handleClick = () => {
    props.inc('',false, '',0, [])
  }
  return (
    <>
      <h1>Game done</h1>
      <div id="wrapper-game-done" className='flex items-center justify-center'>
        <button onClick={handleClick} className="bg-purple-500 hover:bg-purple-400 border-b-4 border-r-4 border-purple-700 hover:border-purple-500 text-black text-center py-6 px-16 rounded">Play again?</button>
      </div>
    </>
  )
}
