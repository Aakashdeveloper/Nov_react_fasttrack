import React,{Component} from 'react';
import Header from './Header';

const URL = 'http://localhost:8900/artists';

class Artist extends Component {
    constructor(){
        super()

        this.state={
            details:''
        }
    }

    componentDidMount(){
        fetch(`${URL}/${this.props.match.params.artistid}`,{method:'GET'})
        .then(response => response.json())
        .then((data) => 
            this.setState({details:data})
        )
    }
    render(){
        return(
            <React.Fragment>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${
                            this.state.details.cover}.jpg')`}}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.details.name}</h3>
                        <div className="bio_text">
                            {this.state.details.bio}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Artist