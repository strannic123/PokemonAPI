import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';

import Details from "./components/details";
import FirstLimit from "./components/first-limit";


function App() {

    return (
        <Router className='App'>
            <Route exact path='/' component={FirstLimit}/>
            <Route path='/:id' component={Details}/>
        </Router>
    )
}

ReactDOM.render(<App />,document.getElementById('root')
);


