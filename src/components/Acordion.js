import React from 'react'

function Acordion() {
    return (
        <div>
            <div className="accordion mb-10 py-2 w-100" id="accordionExample">
                <div className="accordion-item bg-info ">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Study
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul className="list-unstyled">
                                <li className="text-center">
                                    <label className=" text-primary fs-4">Hight school</label>
                                    <div className="accordion-item text-center mt-2">Smk Jakarta 1</div>
                                </li>
                                <li className="text-center">
                                    <label className=" text-primary fs-4">Lulus tahun</label>
                                    <div className="accordion-item text-center">2001 - 2004</div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-info">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed text-center fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Experience
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ol className="list-unstyled">
                                <li className="text-center">
                                    <label className=" text-primary fs-4">PT YAMAHA MOTOR</label>
                                    <div className="accordion-item text-center">Operator produksi</div>
                                    <label className=" text-primary fs-6">sejak</label>
                                    <div className="accordion-item text-center">2005 - 2007</div>
                                </li>

                                <li className="text-center">
                                    <label className=" text-primary fs-4">PT DACREA</label>
                                    <div className="accordion-item text-center">Meter reading</div>
                                    <label className=" text-primary fs-6">sejak</label>
                                    <div className="accordion-item text-center">2007 - 2009</div>
                                </li>
                                <li className="text-center">
                                    <label className=" text-primary fs-4">PT ROYAL ARTINDO</label>
                                    <div className="accordion-item text-center">teknisian enginering</div>
                                    <label className=" text-primary fs-6">sejak</label>
                                    <div className="accordion-item text-center">2009 - 2012</div>
                                </li>
                                <li className="text-center">
                                    <label className=" text-primary fs-4">PT GEOTRANS</label>
                                    <div className="accordion-item text-center">Admin</div>
                                    <label className="text-primary fs-6">sejak</label>
                                    <div className="accordion-item text-center">2012 - 2013</div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Skill
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ol>
                                <li className="text-start text-primary fs-6">
                                    <label className=" text-primary fs-4">Html</label>
                                    <div class="progress">
                                        <div class="progress-bar w-100 bg-dark" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">100%</div>
                                    </div>
                                </li>
                                <li className="text-start text-primary fs-6">
                                    <label className=" text-primary fs-4">CSS</label>
                                    <div class="progress">
                                        <div class="progress-bar w-75 bg-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                                </li>
                                <li className="text-start text-primary fs-6">
                                    <label className=" text-primary fs-4">JAVASCRIPT</label>
                                    <div class="progress">
                                        <div class="progress-bar w-75 bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                                </li>
                                <li className="text-start text-primary fs-6">
                                    <label className=" text-primary fs-4">JQUERY</label>
                                    <div class="progress">
                                        <div class="progress-bar w-50 bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">50%</div>
                                    </div>
                                </li>
                                <li className="text-start text-primary fs-6">
                                    <label className=" text-primary fs-4">BOOTSTRAP.5</label>
                                    <div class="progress">
                                        <div class="progress-bar w-75 bg-primary" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                                </li>
                                <li className="text-start text-primary fs-6">
                                    <label className=" text-primary fs-4">TAILWINDS.css</label>
                                    <div class="progress">
                                        <div class="progress-bar w-50 bg-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">50%</div>
                                    </div>
                                </li>
                                <li className="text-start text-primary fs-6">
                                    <label className=" text-primary fs-4">REACT.js</label>
                                    <div class="progress">
                                        <div class="progress-bar w-50 bg-dark" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">50%</div>
                                    </div>
                                </li>
                                <li className="text-start text-primary fs-6">
                                    <label className=" text-primary fs-4">GIT</label>
                                    <div class="progress">
                                        <div class="progress-bar w-75 bg-danger" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                                </li>
                                <li className="text-start text-primary fs-6">
                                    <label className=" text-primary fs-4">NODE.js</label>
                                    <div class="progress">
                                        <div class="progress-bar w-50 bg-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">50%</div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Acordion