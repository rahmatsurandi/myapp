import React from 'react'
import Card from '../components/Card'
import NavbarComponent from '../components/NavbarComponent'
import { useNavigate } from 'react-router-dom'

function Gambar() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/`;
        navigate(path)

    }

    return (
        <div className="py-5">
            <div className="container">
                <NavbarComponent />
                <h1>The post</h1>
                <div className="row">
                    <Card content={{
                        imageUrl: "http://placekitten.com/g/300/200",
                        title: "first post",
                        published: "22 sept 2022",
                    }} />
                    <Card content={{
                        imageUrl: "http://placekitten.com/300/200",
                        title: "second post",
                        published: "24 sept 2022",
                    }} />
                    <Card content={{
                        imageUrl: "http://placekitten.com/g/300/200",
                        title: "third post",
                        published: "25 sept 2022",
                    }} />
                </div>
            </div>

            <div className="text-center py-5">

                <button value="/login" onClick={routeChange} type="button" className="btn btn-primary btn-block">
                    Back to my profile
                </button>

            </div>

        </div>


    )
}

export default Gambar