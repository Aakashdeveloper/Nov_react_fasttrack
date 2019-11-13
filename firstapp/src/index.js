import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import NewsList from './components/NewsList';

const App = () => {
    return(
        <div>
            <Header/>
            <NewsList/>
        </div>
        
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))

