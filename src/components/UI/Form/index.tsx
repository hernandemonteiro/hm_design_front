import "./Form.scss";

interface formProps {
  children: any;
  onSubmit?: any;
  method?: string;
  enctype?: string;
  action?: string;
}
export default function Form(props: formProps) {
  return (
    <form
      className="form"
      action={props.action}
      method={props.method}
      encType={props.enctype}
      onSubmit={props.onSubmit}
    >
      {props.children}
    </form>
  );
}
