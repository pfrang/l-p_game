import React, { useEffect } from 'react';
import Dropdown from 'react-dropdown';
import Button from '../Buttons/button';
import { useDisplayGame, useDisplayMysteriousGame } from '../context/context';


function Header(props) {

  const { gameMystStart, setMystGame, endMystGame } = useDisplayMysteriousGame();
  const { gameStart, setGame, endGame } = useDisplayGame();
  const func = props.startGame

  useEffect(() => {
    if(gameMystStart) {
      func();
    }
  },[gameMystStart])

  const onClick = () => {
    setMystGame();
  }
  return (
    <header className='relative ml-0'>
      <div className='relative flex justify-between ml-0'>
        <Button id="reset" text="Reset Game" onClick={() => window.location.reload() }></Button>
        {/* <a className='absolute left-2 top-2 bg-purple-500 hover:bg-purple-400 border-b-4 border-r-4 border-purple-700 hover:border-purple-500 text-black text-center py-1 px-1' href="/">Reset game</a> */}
        <h1 className='inline m-auto'>Er du klar til å få det på? 🍻</h1>
        <Button id="game2btn" text="Play mysterious game" onClick={onClick} style={gameStart ? 'invisible' : ''}></Button>
      </div>
    </header>
  );
}

export default Header;
