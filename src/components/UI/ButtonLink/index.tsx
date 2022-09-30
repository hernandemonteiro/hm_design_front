import React from "react";
import { Link } from "react-router-dom";
import "../Button/Button.scss";
import "./ButtonLink.scss";

interface buttonLinkProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  to: string
}
export default function ButtonLink(props: buttonLinkProps) {
  return (
    <Link className="link" to={props.to}>
    <button className={`btn ${props.className}`} disabled={props.disabled} type={props.type}  onClick={props.onClick}>
      {props.children}
    </button>
    </Link>
  );
}
