import react, { Component } from 'react';

class Task extends Component {
    state = {
        msg : "", mark : false
    }

     newMsg = (e)=>{
        this.setState({msg : e.target.value})
    }

    sendMsg = ()=>{
        this.props.setMsg(this.state)
    }

    render() {
        return (
            <div className="container">
                <div className="row m-5">
                <div className="col-8 offset-2">
                    <div className="input-group">
                            <input type="text" onChange={this.newMsg} placeholder="New Task" className="form-control" />
                            <div className="input-group-append">
                        <button onClick = {this.sendMsg} className="btn btn-primary">Add</button>
                    </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        )

    }
}

export default Task