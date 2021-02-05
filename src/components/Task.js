import react, { Component } from 'react';

class Task extends Component {
    state = {
        msg: ""
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col-8 offset-2">
                    <div className="input-group">
                        
                            <input type="text" placeholder="New Task" className="form-control" />
                            <div className="input-group-append">
                        <button className="btn btn-primary">Add</button>
                    </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        )

    }
}

export default Task