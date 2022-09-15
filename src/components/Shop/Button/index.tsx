import "./Button.scss";

interface ButtonProps {
  children: string;
  onClick?: any;
  className?: string;
}
export default function Button(props: ButtonProps) {
  return (
    <button className={`btn ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
