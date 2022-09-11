import "./ButtonGradient.scss";

interface ButtonProps {
  children: string;
  onClick?: any;
  className?: string;
}
export default function ButtonGradient(props: ButtonProps) {
  return (
    <button className={`btnGradient ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
