import React from 'react'
import Acordion from '../components/Acordion'
import Footer from '../components/Footer'
import NavbarComponent from '../components/NavbarComponent'
import ProfilePhoto from '../components/ProfilePhoto'


function Dashboard() {
    return (
        <div className="container-fluid" >
            <div className="container ">
                <NavbarComponent />
                <ProfilePhoto className="py-2  " />
                <div className="row d-flex">
                    <div className="col-md-8 z-index-1">
                        <Acordion />
                    </div>
                    <div className="col-md-4 z-index-1">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Dashboard