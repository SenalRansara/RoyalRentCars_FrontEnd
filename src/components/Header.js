import React from 'react';
// import Logo from '../assets/Logo.png';

function Header() {
    return (
        <div className="header-basic">
            <header>
                <div className="row">
                    <div className="header-col">
                        <h1>Online Book Store</h1>
                        <img className="headerLogo"  width="400px" height="150px" alt="logo" />
                    </div>
                </div>
            </header>
            <div class="topnav">
                <a class="active" href="/Dashboard">Home</a>
                <a href="/AllBook">Books</a>
                <a className="float-right" href="/">Logout</a>

            </div>
        </div>
    )
}

export default Header;