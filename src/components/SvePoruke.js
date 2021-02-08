import React from 'react';


const SvePoruke = ({ allMsg }) => {
    const svePoruke = allMsg.map((el, index) => {
        return (
            <div className="col-4 mb-2" key = {el.id}>
                <div className="card">
                    <div className="card-header text-center">
                        <h2>Task {index + 1}</h2>
                    </div>
                    <div className="card-body text-center">
                        <h4>{el.msg}</h4>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary">Mark</button>
                        <button className="btn btn-danger float-right">Delete</button>

                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row ">
                {svePoruke}
            </div>


        </div>
    )
}

export default SvePoruke;