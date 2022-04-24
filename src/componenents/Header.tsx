import React from 'react';
import Dropdown from 'react-dropdown';
import Button from '../Buttons/button';


function Header(props) {

  const onClick = () => {

  }
  return (
    <header>
      <a className='absolute left-2 top-2 bg-purple-500 hover:bg-purple-400 border-b-4 border-r-4 border-purple-700 hover:border-purple-500 text-black text-center py-2 px-2' href="/">Reset game</a>
        <h1 className='inline'>Er du klar til å få det på? 🍻</h1>
    </header>
  );
}

export default Header;
