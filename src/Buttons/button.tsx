import React from 'react';

function Button(props) {
  return (
    <>
      <button id={props.id} onClick={props.onClick} style={props?.style}>{props?.text}
        {props.children}</button>
    </>
  );
}

export default Button;
