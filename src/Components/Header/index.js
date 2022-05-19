import './header.css'
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/Logo-Harry-Potter-removebg-preview.png"

const Header = () => {
    return (
        <div className='navbar'>
            <input type="checkbox" id="check" />
            <div className="icon">
                <Link to="/"><img src={logo} alt="imglogo"  width={150} /></Link></div>
            <nav>
               
                <ol>
                    <li> <Link to="/house" > Les maisons</Link></li>
                    <li><Link to="/characters"> Les personnages </Link>  </li>
                    <li> <Link to="/compteurs" > Les sorts</Link></li>
                    


                </ol>
                <label htmlFor="check" className='bar' >
                    <span className="fa fa-bars" id="bars"></span>
                    <span className="fa fa-times" id="times"></span>
                </label>
            </nav>
        </div>
    )
}

export default Header