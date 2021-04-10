import React from 'react-dom';
import './navbar.css';

const Navbar = () =>{

    return(
        <div className="nav"> 
        <h1 className = "title">REimagine</h1>
        <br/>
        <h1 className="option"><i class="fas fa-home"></i> Dashboard</h1>
        <h1 className="option"><i class="fas fa-dollar-sign"></i> Auction</h1>
        <h1 className="option"> <i class="fas fa-exclamation-triangle"></i> Rise a Complaint</h1>
        <h1 className="option"><i class="fas fa-sign-in-alt"></i> Logout</h1>

        </div>
    );

}

export default Navbar;