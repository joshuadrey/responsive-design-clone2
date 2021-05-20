import React from 'react'

function Header() {
    return (
        <div className="header">
            <img class='img' src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt = 'start-bootstrap'></img>
            <div class='tabs'>
                <p><a>Services</a></p>
                <p><a>Portfolio</a></p>
                <p><a>About</a></p>
                <p><a>Team</a></p>
                <p><a>Contact</a></p>
            </div>
        </div>
    );
}

export default Header;
