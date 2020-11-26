import React from 'react';
import ReactDOM from 'react-dom';

import Details from "./components/details";
import FirstLimit from "./components/first-limit";

import { BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';


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


