import React, {Component} from 'react';
import './header.css';

class Header extends Component {

    constructor(){
        super()

        this.state = {
            title: 'React News App',
            userInput: 'User Text Here'
        }
        
    }

    inputChange(event){
        // console.log(event.target.value)
        this.setState({userInput:event.target.value?event.target.value:"User Text Here"})
    }

    render(){

        return(
            <header>
                    <h1 className="logo"
                    onClick={()=> console.log("Clicked")}>
                    {this.state.title}
                    </h1>
                    <center>
                        <input  onChange={this.inputChange.bind(this)}/>
                        <p>{this.state.userInput}</p>
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