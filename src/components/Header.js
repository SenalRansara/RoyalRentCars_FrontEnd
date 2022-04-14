import React from 'react';
import Logo from '../assets/Logo.png';

function Header() {
    return (
        <div className="header-basic">
            <header>
                <div className="row">
                    <div className="header-col">
                        <img className="headerLogo" src={Logo} width="400px" height="150px" alt="logo" />
                    </div>
                    <div className="log">
                        <a href="" className="logout">Logout</a>
                    </div>
                </div>
            </header>
            <div class="topnav">
                <a class="active" href="#">Home</a>
                <a href="/AllRental">Rentals</a>
                <a href="/AllReservation">Events</a>
                <a href="#">Vehicles</a>
                <a href="#">Human Resource</a>

            </div>
        </div>
    )
}

export default Header;