import logo from './logo.svg';
import './App.css';

import {Home} from "./Home";
import {History} from "./History";
import {Navigation} from "./Navigation";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <h3 className="m-3 d-flex justify-content-center">
                    Covid Prediction
                </h3>

                <Navigation/>

                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/history' component={History}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
