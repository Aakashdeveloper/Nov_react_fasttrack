import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsList from './components/NewsList';
import JSON from './db.json';


class App extends Component {
    constructor(){
        super()

        this.state={
            news: JSON,
            filtered: JSON
        }
    }

    filterNews(keyword){
        const output =  this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })

        this.setState({filtered:output})
    }

    //var a = [0,1,2,3,4]
    //a.filter((data)=> data*1)

    render(){
        return(
            <div>
                <Header userText={(keyword)=>{this.filterNews(keyword)}}/>
                <NewsList newsData={this.state.filtered}/>
            </div>
            
        )
    }
    
}

ReactDOM.render(<App/>, document.getElementById('root'))


/*

var add =(a,b) => { return a+b }

add(1,2)
*/
