import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import MenuNav from "./components/menu-nav";
import Details from "./components/details";

import './index.css';

function App() {


    return <div className='app-wrapper'>

        <Router>
            <Route exact path='/' component={MenuNav}/>
            <Route path='/:id' component={Details}/>

        </Router>
        {/*<MenuNav />*/}
        {/*<Details/>*/}

    </div>
}

ReactDOM.render(<App />,document.getElementById('root')
);


