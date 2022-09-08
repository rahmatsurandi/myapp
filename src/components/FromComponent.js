import React, { Component } from 'react'

export class FromComponent extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            alamat: '',
            telp: '',
            sekolah: '',
            jurusan: '',
            Images: '',
            name: ""
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.setState({
            name: `${this.state.firstName}${this.state.lastName}`,
            alamat: `${this.state.alamat}`,
            telp: `${this.state.telp}`,
            email: `${this.state.email}`,
            sekolah: `${this.state.sekolah}`,
            Images: `${this.state.Images}`,
            jurusan: `${this.state.jurusan}`,
        })
        this.state.firstName = ""
        this.state.lastName = ""

    }

    render() {
        const { name, alamat, telp, email, sekolah, Image, jurusan } = this.state
        return (
            <div className="bg-black">
                <div className="py-5 px-5 ">
                    <div className="container bg-light py-5 px-5 shadow-lg">
                        <div className="d-flex flex-row m-10 shadow-lg">
                            <div className="col-md-6 ">
                                <div className="mb-2 ">
                                    <div className="card">
                                        <div className="card-header">My profile</div>
                                        <div className="card-body">
                                            <form onSubmit={this.submitHandler}>
                                                <div className="mb-4">
                                                    <label htmlFor="firstName" className="form-label" >firstname</label>
                                                    <input type="text" value={this.state.firstName} onChange={this.changeHandler} className="form-control" id="firstName" name="firstName" />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="lastName">lastName</label>
                                                    <input type="text" value={this.state.lastName} onChange={this.changeHandler} className="form-control" name="lastName" />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email_link" value={this.state.email} onChange={this.changeHandler} className="form-control" name="email" />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="telp">No telp</label>
                                                    <input type="number" value={this.state.telp} onChange={this.changeHandler} className="form-control" name="telp" />
                                                </div>

                                                <div className="mb-4">
                                                    <label htmlFor="alamat">alamat</label>
                                                    <input type="text" value={this.state.alamat} onChange={this.changeHandler} className="form-control" name="alamat" />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="sekolah">Sekolah</label>
                                                    <input type="text" value={this.state.sekolah} onChange={this.changeHandler} className="form-control" name="sekolah" />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="jurusan">jurusan</label>
                                                    <input type="text" value={this.state.jurusan} onChange={this.changeHandler} className="form-control" name="jurusan" />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="image">image</label>
                                                    <input type="file" value={this.state.Image} onChange={this.changeHandler} className="form-control" name="image" />
                                                </div>

                                                <button className="btn btn-primary btn-block" type="submit">submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 px-5">
                                <div className="mb-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <h1 className="text-primary bg-light text-center  font-weight-bold">My profile</h1>
                                            <div className="py-2">
                                                <div className='my-2'>
                                                    <h6 className="text-primary  text-center my-2">
                                                        {name ? name.toUpperCase() : ''}
                                                    </h6>
                                                    <h6 className="text-primary  text-center my-2">
                                                        {name ? alamat.toUpperCase() : ''}
                                                    </h6>
                                                    <h6 className="text-primary  text-center my-2">
                                                        {name ? telp : ''}
                                                    </h6>
                                                    <h6 className="text-primary  text-center my-2">
                                                        {name ? email : ""}
                                                    </h6>
                                                    <h6 className="text-primary  text-center my-2">
                                                        {name ? sekolah.toUpperCase() : ""}
                                                    </h6>
                                                    <h6 className="text-primary  text-center my-2">
                                                        {name ? jurusan.toUpperCase() : ""}
                                                    </h6>
                                                    <h6 className="text-primary  text-center my-2">
                                                        <img className="" width="100px" hight='100px' src={name ? Image : ""}></img>
                                                    </h6>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FromComponent






