import React from "react";

function Section() {
    return (
        <div>
            <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* Product image*/}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* Product details*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* Product name*/}
                                    <h5 className="fw-bolder">ADAS Research</h5>
                                    {/* Product price*/}
                                    Department: CS
                                    Type: Research
                                    Deadline: 05/05/1990
                                </div>
                            </div>
                            {/* Product actions*/}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Learn more</a></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
        </div>
    )
}