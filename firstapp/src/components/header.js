import React, {Component} from 'react';
import './header.css';

class Header extends Component {

    constructor(){
        super()

        this.state = {
            title: 'React News App'
        }
        
    }

    render(){

        return(
            <header>
                    <h1 className="logo">{this.state.title}</h1>
                    <center>
                        <input/>
                    </center>
                <hr/>
            </header>
        )
    }
}

export default Header;



/*
const Header = () => {
    return(
        <div>
        <center>
            <h1>This is my Header</h1>
        </center>
        <hr/>
        </div>
    )
}
*/