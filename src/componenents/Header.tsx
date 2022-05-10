import React, { useEffect } from 'react';
import Dropdown from 'react-dropdown';
import Button from '../Buttons/button';
import { useDisplayGame, useDisplayMysteriousGame } from '../context/context';


function Header(props) {

  const { gameMystStart, setMystGame, endMystGame } = useDisplayMysteriousGame();
  const { gameStart, setGame, endGame } = useDisplayGame();
  const initGame = props.startGame

  useEffect(() => {
    if (gameMystStart) {
      initGame();
    }
  }, [gameMystStart])

  const onClick = () => {
    setMystGame();
  }
  return (
    <header className=''>

        {gameStart ?
        <div className='flex justify-between my-2 mb-[10rem]'>
         <h1 id="header" className='inline text-5xl absolute left-3'>Klar til å få det på? 🍻</h1>
          <a id="reset-btn" className='absolute top-0 right-0 m-0' href="/">
            <svg id ="svg-arrow" width="50" height="20" viewBox="0 0 60 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="reset-arrow" fill-rule="evenodd" clip-rule="evenodd" d="M46.595 39.3125L60 39.3125L60 42.875L42.5 42.875L40 41.0938L40 28.625L45 28.625L45 35.75C49.4814 33.3543 52.7035 29.9554 54.1493 26.0988C55.5951 22.2422 55.1808 18.1513 52.973 14.4825C50.7651 10.8137 46.8916 7.77968 41.9739 5.86713C37.0563 3.95459 31.3795 3.27441 25.8543 3.93574C20.3292 4.59707 15.2759 6.56156 11.5053 9.51404C7.7347 12.4665 5.46529 16.2358 5.06118 20.2173C4.65706 24.1987 6.14167 28.1615 9.2768 31.4698C12.4119 34.7781 17.0159 37.2402 22.35 38.4611L20.84 41.8597C14.3669 40.3808 8.7906 37.3794 5.02467 33.3472C1.25874 29.3149 -0.473553 24.491 0.111588 19.6656C0.696729 14.8401 3.56461 10.2994 8.24539 6.78712C12.9262 3.27487 19.1424 0.999405 25.8755 0.333487C32.6087 -0.332432 39.4597 0.650684 45.3062 3.12178C51.1526 5.59287 55.6479 9.40543 58.0555 13.9349C60.4632 18.4643 60.6404 23.442 58.5583 28.0527C56.4761 32.6633 52.258 36.6333 46.595 39.3125V39.3125Z" fill="black" fill-opacity="0.5" />
            </svg>
          </a>
        </div> :
        <h1 id="header" className='inline m-auto text-9xl'>Klar til å få det på? 🍻</h1>
        }

    </header>
  );
}

export default Header;
