import React from 'react';
import Button from '../Buttons/button';
import { FC } from 'react';

type Props = {
  onClick: () => void;
};



const GameStart:FC<Props> = (props) => {
  return (
    <div>
      <div id="wrapper-game-done" className='flex items-center justify-center'>
        <Button onClick={props.onClick} text='Start game'/>
      </div>
    </div>
  );
}

export default GameStart;
