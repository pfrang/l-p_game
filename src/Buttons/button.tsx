import React, { ReactNode } from 'react';

interface ButtonProps {
  onClick?: (input?: any) => void;
  id?: any;
  text?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  className?: string;
 }
function Button(props: ButtonProps) {
  return (
    <>
      <button className={props.className} id={props.id} onClick={props.onClick} style={props?.style}>{props?.text}
        {props.children}</button>
    </>
  );
}

export default Button;
