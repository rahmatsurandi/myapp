import React, { useState } from 'react'

function Daftar({ Login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" })
    const submitHandler = e => {
        e.preventDefault()
        Login(details);

    }
    return (
        <div>
            <div className="container-fluid py-5 ">
                <div classname="row g-3 align-items-center px-10 mr-100px">
                    <div classname="col-md-6 ">
                        <div classname="card align-items-center">
                            <div className="card-header bg-light mb-4 w-25">
                                <h2 className="text-primary text-center">Login</h2>
                                {(error !== "") ? (<div>{error}</div>) : ""}
                            </div>

                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="mb-4 w-25">
                                        <label htmlFor="name"> name :</label>
                                        <input
                                            value={details.name}
                                            onChange={(e) => setDetails({ ...details, name: e.target.value })}
                                            name="name"
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="name" />
                                    </div>
                                    <div className="mb-4 w-25">
                                        <label htmlFor="email"> email :</label>
                                        <input
                                            value={details.email}
                                            onChange={(e) => setDetails({ ...details, email: e.target.value })}
                                            name="email"
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Email" />
                                    </div>
                                    <div className="mb-4 w-25">
                                        <label htmlFor="password"> password :</label>
                                        <input
                                            value={details.password}
                                            onChange={(e) => setDetails({ ...details, password: e.target.value })}
                                            name="password"
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password" />
                                    </div>
                                    <button value="login" className="btn btn-primary btn-block" type="submit">login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Daftar