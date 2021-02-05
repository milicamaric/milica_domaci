import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from './components/Contact';
import { BrowserRouter, Route } from 'react-router-dom';
import Task from './components/Task';
import SvePoruke from './components/SvePoruke';


class App extends Component {

    state = {
        allMsg : [
            { id : 1, msg : "CAo"},
            { id : 2, msg : "Ej"},

        ]
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Route exact path="/">
                        <Home />
                        <Task />
                        <SvePoruke />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    
                </BrowserRouter>

            </div>

        )
    }
}


export default App;