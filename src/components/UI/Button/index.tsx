import React from "react";
import "./Button.scss";

interface ButtonProps {
  children?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
}
export default function Button(props: ButtonProps) {
  return (
    <button disabled={props.disabled} type={props.type} className={`btn ${props.className}`}  onClick={props.onClick}>
      {props.children}
    </button>
  );
}
