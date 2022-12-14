import React from "react";
import {} from "./Button.scss";

interface ButtonProps {
  children?: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}
export default function Button(props: ButtonProps) {
  return (
    <button
      disabled={props.disabled}
      type={props.type}
      className={`btn ${props.className}`}
      onClick={props.onClick}
    >
      {props.children || "BUTTON"}
    </button>
  );
}
