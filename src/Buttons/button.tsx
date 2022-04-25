import React from 'react';

function Button(props) {
  return (
    <>
      <button id={props.id} onClick={props.onClick} className={`bg-purple-500 hover:bg-purple-400 border-b-4 border-r-4 border-purple-700 hover:border-purple-500 text-black text-center rounded ${props?.style}` }>{props.text}</button>
    </>
  );
}

export default Button;
