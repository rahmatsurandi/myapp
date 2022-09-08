import React from 'react'

function Card(props) {
    console.log(props)
    return (

        <div className="col-md-4 shadow-lg">
            <div classname="card">
                <img src={props.content.imageUrl} alt='cat' classnames="card-img-top" />
                <div classname="card-body">
                    <h1>{props.content.title}</h1>
                    <small classname="text-mutted">{props.content.published}</small>
                </div>
            </div>
        </div>

    )
}

export default Card