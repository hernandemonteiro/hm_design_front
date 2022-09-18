import "./Button.scss";

interface ButtonProps {
  children: string;
  onClick?: any;
  className?: string;
  type?: any;
  disabled?: any;
}
export default function Button(props: ButtonProps) {
  return (
    <button disabled={props.disabled} type={props.type} className={`btn ${props.className}`}  onClick={props.onClick}>
      {props.children}
    </button>
  );
}
