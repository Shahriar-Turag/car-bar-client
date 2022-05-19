import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="page notfound text-center">
            <div className="notfound-box d-flex flex-column py-4 mx-4 p-lg-5">
                <h2 className="fs-2 fw-bold pb-4">
                    CAR <span className="text-warning">BAR</span> can not give
                    what you are asking for
                </h2>
                <Link to="/">
                    <button className="btn btn-manage ">Go to Home page</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
