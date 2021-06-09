import React, {Component} from 'react'

class Header extends Component {
    constructor(props){
        super(props)
        this.state= {
            showMenu: false
        }
    }

    toggleMenu = () => {
        console.log('hello')
        this.setState({showMenu: !this.state.showMenu})
    }

    render(){
    return (
        <div className="header">
            <img class='img' src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt = 'start-bootstrap'></img>
            <button onClick = {this.toggleMenu} className= 'menu'>Menu</button>
            <div class='tabs'>

                <p><a>Services</a></p>
                <p><a>Portfolio</a></p>
                <p><a>About</a></p>
                <p><a>Team</a></p>
                <p><a>Contact</a></p>
            </div>

            <div class = {`drop_tabs ${this.state.showMenu ? 'show' : ''}`}>
                <p><a>Services</a></p>
                <p><a>Portfolio</a></p>
                <p><a>About</a></p>
                <p><a>Team</a></p>
                <p><a>Contact</a></p>
            </div>
        </div>
    );
}
}
export default Header;
