import { Link } from "react-router-dom";
import "../Button/Button.scss";
import "./ButtonLink.scss";

interface buttonLinkProps {
  children: string;
  onClick?: any;
  className?: string;
  type?: any;
  disabled?: boolean;
  to: string
}
export default function ButtonLink(props: buttonLinkProps) {
  return (
    <Link className="link" to={props.to}>
    <button disabled={props.disabled} type={props.type} className={`btn ${props.className}`}  onClick={props.onClick}>
      {props.children}
    </button>
    </Link>
  );
}
