import React from 'react';

function button(props) {
  return (
    <>
      <button onClick={props.onClick} className="bg-purple-500 hover:bg-purple-400 border-b-4 border-r-4 border-purple-700 hover:border-purple-500 text-black text-center py-6 px-16 rounded">Play again?</button>
    </>
  );
}

export default button;
