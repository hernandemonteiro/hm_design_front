import "./Form.scss";

interface formProps{
    children: any;
    onSubmit: any;
}
export default function Form(props: formProps){
    return (
        <form className="form" onSubmit={props.onSubmit}>
            {props.children}
        </form>
    )
}