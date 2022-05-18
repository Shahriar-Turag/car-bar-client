import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="home-banner">
            <h1 className="banner-title">
                If you want <br />
                To go big, Stop <br />
                Thinking small
            </h1>
            <br />
            <Link to={"/inventory"}>
                <button className="btn btn-explore">Explore</button>
            </Link>
        </div>
    );
};

export default Banner;
