import "./Main.scss";

interface MainProps {
    children?: any;
  }
  
export default function Main(props: MainProps) {
  return <main>{props.children}</main>;
}
