import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from './components/Contact';
import { BrowserRouter, Route } from 'react-router-dom';
import Task from './components/Task';
import SvePoruke from './components/SvePoruke';


class App extends Component {

    state = {
        allMsg: [


        ]
    }

    mark = (index) => {
        const copyArr = [...this.state.allMsg]

        copyArr[index].mark = !copyArr[index].mark
        this.setState({
            allMsg: copyArr
        })
    }

    deleteAcc = (index) => {
        const copyArr = [...this.state.allMsg]
        copyArr.splice(index, 1)
        this.setState({
            allMsg: copyArr
        })
    }

    setMsg = (vracenoIzTask) => {
        console.log(vracenoIzTask)
        vracenoIzTask.id = Math.floor(Math.random() * (10000 - 10) + 10)
        console.log(vracenoIzTask)
        const ubaci = [...this.state.allMsg, vracenoIzTask];
        this.setState({ allMsg: ubaci })
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Route exact path="/">
                        <Task setMsg={this.setMsg} />
                        <SvePoruke allMsg={this.state.allMsg} deleteAcc={this.deleteAcc} mark={this.mark} />
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