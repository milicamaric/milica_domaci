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
            { id : 1, msg : "CAo", mark : false},
            { id : 2, msg : "Ej",mark : false}

        ]
    }

    setMsg = (vracenoIzTask)=>{
        console.log(vracenoIzTask)
        vracenoIzTask.id = Math.floor(Math.random()*(10000-10)+10)
        console.log(vracenoIzTask)
        const ubaci = [...this.state.allMsg, vracenoIzTask];
        this.setState({allMsg : ubaci})
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Route exact path="/">
                        <Task setMsg = {this.setMsg} />
                        <SvePoruke allMsg={this.state.allMsg} />
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