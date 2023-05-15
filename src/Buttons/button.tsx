import React, { ReactNode } from 'react';

interface ButtonProps {
  onClick?: (input?: any) => void;
  id?: any;
  text?: string;
  style?: any;
  children?: ReactNode;
 }
function Button(props: ButtonProps) {
  return (
    <>
      <button id={props.id} onClick={props.onClick} style={props?.style}>{props?.text}
        {props.children}</button>
    </>
  );
}

export default Button;
