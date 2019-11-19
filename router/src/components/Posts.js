import React,{ Component} from 'react';
import { Link } from 'react-router-dom';


class Posts extends Component {
    render(){
        return(
            <div class="panel panel-primary">
                <div class="panel-heading">Posts Heading</div>
                <div class="panel-body">
                    <h2>Posts Page</h2>
                    <br/>
                    <Link to="/" className="btn btn-success">JavaScript</Link>
                    <br/>
                    <Link to="/" className="btn btn-success">React</Link>
                    <br/>
                    <Link to="/" className="btn btn-success">Node</Link>
                </div>
            </div>
        )
    }
}


export default Posts;