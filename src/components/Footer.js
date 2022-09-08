import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className="py-4">
            <footer className="py-1 mb-1">
                <div className="">
                    <ul class="list-unstyled">
                        <li class="py-1">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="shadow-lg" href="https://www.linkedin.com/in/rahmat-surandi-946269204/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="1x" /></a>
                                </li>
                                <li className="list-inline-item fs-6">
                                    linkedin
                                </li>
                            </ul>
                        </li>
                        <li class="py-1">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="bg-white text-danger shadow-lg" href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                                </li>
                                <li className="list-inline-item fs-5">Instagram</li>
                            </ul>
                        </li>
                        <li class="py-1">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="bg-white text-black shadow-lg" href="https://github.com/rahmatsurandi" target="_blank"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
                                </li>
                                <li className="list-inline-item fs-4">Github</li>
                            </ul>
                        </li>
                        <li class="py-1">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className=" text-danger shadow-lg" href="https://www.youtube.com/channel/UCnQWTXvpyZLEMqYBD9eKP1A" target="_blank"><FontAwesomeIcon icon={faYoutube} size="4x" /></a>
                                </li>
                                <li className="list-inline-item fs-3">Youtube</li>
                            </ul>
                        </li>
                        <li class="py-1">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className=" text-primary shadow-lg" href="https://www.facebook.com/randi.randie.3" target="_blank"><FontAwesomeIcon icon={faFacebook} size="5x" /></a>
                                </li>
                                <li className="list-inline-item fs-2">Facebook</li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </footer>
        </div>
    )
}

export default Footer