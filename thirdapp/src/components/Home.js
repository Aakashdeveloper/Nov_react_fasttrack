import React,{Component} from 'react';
import Banner from './Banner'
import Artistlist from './Artristlist'

const URL = 'http://localhost:8900/artists';

class Home extends Component {
    constructor(props){
        console.log('in constructorv')
        super(props)

        this.state={
            artists:''
        }
    }

    
    componentDidMount(){
        console.log('in componentDidMount')
        fetch(URL,{method:'GET'})
        .then(response => response.json())
        .then((data) => 
            this.setState({artists:data})
        )
    }
    render(){
        console.log('in render')
        return(
            <div>
               <Banner/>
               <Artistlist allArtist={this.state.artists}/>
            </div>
        )
    }
}

export default Home