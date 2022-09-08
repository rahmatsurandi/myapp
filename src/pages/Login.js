import React, { useState } from 'react'
import Daftar from './Daftar'
import Dashboard from './Dashboard'


function LogoutUser() {
    const adminUser = {
        email: 'admin@gmail.com',
        password: 'admin123',
    }
    const [user, setUser] = useState({ name: "", email: "" })
    const [error, setError] = useState("")
    const login = details => {
        console.log(details)
        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("logged in")
            setUser({
                name: details.name,
                email: details.email,
            })
        } else {
            console.log("not logged in")
            setError("You don't have an account yet")
        }
    }
    const Logout = () => {
        setUser({ name: "", email: "" })
    }
    return (
        <div className=''>

            {(user.email !== "") ? (
                <div>
                    <div className="container-fluid py-10">
                        <div className="container-sm">
                            <Dashboard />
                            <ul className="list-inline px-10 text-end py-10">
                                <li className="list-inline-item">
                                    <h2 className=' fs-2 fw-bold text-primary py-2'>{user.name}</h2>
                                </li>
                                <li className="list-inline-item">
                                    <button className="btn btn-primary btn-block" type="submit" onClick={Logout}>logout</button>
                                </li>
                            </ul>

                        </div>


                    </div>


                </div>
            ) : (
                <div>
                    <Daftar Login={login} error={error} />
                </div>
            )}
        </div>
    )
}

export default LogoutUser






