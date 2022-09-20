import "./CardCart.scss";

interface CardProps {
    photo: string;
    description: string;
    actions: any;
    price: string;
}
export default function CardCart(props: CardProps){
    return(
        <div className="cardCart">
            <div className="photo">{props.photo}</div>
            <div className="description">{props.description}</div>
            <div className="actions">
                {props.actions}
                <h3>{props.price}</h3>
            </div>
        </div>
    )
}