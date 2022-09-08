import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBlenderPhone, faAddressCard } from '@fortawesome/free-solid-svg-icons'

function ProfilePhoto() {
    return (
        <div className="">
            <div className="card p-10 m-aouto">
                <div className="card-body shadow-lg">
                    <h1 className="text-2xl font-bold mb-4 text-info">My profile</h1>
                    <div className="row">
                        <div className="col-md-6 shadow-lg">
                            <img src="../asset/profile.jpg" className="d-block w-100 rounded-circle shadow-lg mr-10" alt="rounded" alt="" />
                        </div>
                        <div className="col-md-6">
                            <img src="../asset/web3.jpg" className="d-block w-100  shadow-lg mr-10" alt="rounded" alt="" />
                        </div>
                    </div>
                    <ul className="list-unstyled py-2 ">
                        <li className="fs-4 text-bold text-black ">
                            <FontAwesomeIcon icon={faEnvelope} size="1x" className='text-white-500 shadow-lg' /> &nbsp; Email :
                            <a className="fs-4" href='https://mail.google.com/mail/u/0/#inbox'>&nbsp;Rahmatsurandi1986@gmail.com</a>
                        </li>
                        <li className="fs-4 text-bold text-black ">
                            <FontAwesomeIcon icon={faBlenderPhone} size="1x" className='text-white-500 shadow-lg' /> &nbsp;Telp :
                            <a className="fs-4" href='https://web.whatsapp.com/'>&nbsp;081386171495</a>
                        </li>
                        <li className="fs-4 text-bold text-black ">
                            <FontAwesomeIcon icon={faAddressCard} size="1x" className='text-white-500 shadow-lg' /> &nbsp;Alamat :
                            <a className="fs-4" href='https://www.google.co.id/maps/@-6.2204245,106.9453601,16z'>&nbsp; kp bulak jaya rt 012/08 n0 08 pulogebang cakung jakarta timur</a>
                        </li>

                    </ul>
                </div>
                {/* <div className="card-footer shadow-lg py-2"> */}


                {/* </div> */}
            </div>
        </div >
    )
}

export default ProfilePhoto