import React, {Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './Home';
import Posts from './Posts';
import Profile from './Profile';
import PostDetails from './PostDetails'

class Routing extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <header>
                    <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Apax</a>
                        </div>
                        <div class="collapse navbar-collapse" id="myNavbar">
                        <ul class="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/post">Post</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                    </header>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/post" component={Posts}></Route>
                    <Route path="/posts/:topic" component={PostDetails}></Route>
                    <Route path="/profile" component={Profile}></Route>
                </div>
            </BrowserRouter>
        )
    }
}


export default Routing;