import Menu from "../Menu";
import "./Template.scss";

interface TemplateProps {
  children: any;
}

export default function Template(props: TemplateProps) {
  return (
    <section className="AdminPage">
      <Menu />
      <main className="mainAdmin">{props.children}</main>
    </section>
  );
}
