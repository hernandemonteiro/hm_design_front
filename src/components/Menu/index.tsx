import React from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";

export default function Menu(){

    return (

        <nav>
            <Link to='/'>
                <button className='btnMenu'>Inicial</button>
            </Link>
            <Link to='/'>
                <button className='btnMenu'>Inicial</button>
            </Link>
        </nav>
    )

}