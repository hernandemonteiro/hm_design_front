import React from "react";
import {} from "../Button/Button.scss";
import {} from "./ButtonLink.scss";

interface buttonLinkProps {
  children?: any;
  className?: string;
  disabled?: boolean;
  to: string;
}
export default function ButtonLink(props: buttonLinkProps) {
  return (
    <a className="link" href={props.to}>
      <button
        className={`btn ${props.className}`}
        disabled={props.disabled}
        type="button"
      >
        {props.children}
      </button>
    </a>
  );
}
