import React, { useState } from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";

export default function Menu() {

    const [dropdown, setDropdown] = useState('menuMobile');

    function MenuDropdown(){
        if(dropdown == 'menuMobile'){
            setDropdown('');
        } else {
            setDropdown('menuMobile');
        }
    }
    

    return (

        <nav>
            <button className={`btnMobile btnMenu`} onClick={() => MenuDropdown()}>MENU</button>
            <div className={`${dropdown} boxMenu`}>
                <Link to='/' onClick={() => MenuDropdown()}>
                    <button className='btnMenu'>Inicial</button>
                </Link>
                <Link to='/' onClick={() => MenuDropdown()}>
                    <button className='btnMenu'>Inicial</button>
                </Link>
            </div>
        </nav>
    )

}