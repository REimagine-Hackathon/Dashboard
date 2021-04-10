import React from 'react-dom';
import './navbar.css';

const Navbar = () =>{

    return(
        <div className="nav"> 
        <h1 className = "title">REimagine</h1>
        <br/>
        <h1 className="option">Home</h1>
        <h1 className="option">Auction</h1>
        <h1 className="option">Biding</h1>
        <h1 className="option">Login</h1>

        </div>
    );

}

export default Navbar;