import "./TitleHome.scss";

export default function TitleHome(props: any) {
  return (
    <div className="Title">
      <h1>{props.title}</h1>
      <hr />
      <br />
    </div>
  );
}
