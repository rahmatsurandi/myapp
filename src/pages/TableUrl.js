import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import FromComponent from '../components/FromComponent'
import { useNavigate } from 'react-router-dom'

function TableUrl() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/`;
        navigate(path)
    }
    return (
        <div className="container-fluid bg-light">
            <NavbarComponent />
            <FromComponent />
            <div className="text-center py-1">
                <button value="/login" onClick={routeChange} type="button" className="btn btn-primary btn-block">
                    Back to my profile
                </button>
            </div>
        </div>
    )
}

export default TableUrl