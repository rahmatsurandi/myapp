import React from 'react'
import { Link } from 'react-router-dom'

function NavbarComponent() {
    return (

        <div className='container-lg mb-2 py-5'>
            <nav className="navbar navbar-expand-lg navbar-light bg-black shadow-lg fixed-top">
                <div className="container-fluid">
                    <p className="navbar-brand fs-2 text-white font-bold">Rahmat Surandi</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to={'/login'}>Login</Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={'/login/gambar'}>Gambar</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={"/table"}>Table</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to={"/skill"}>Skill</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default NavbarComponent