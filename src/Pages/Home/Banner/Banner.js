import React from "react";
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
            <button className="btn btn-explore">Explore</button>
        </div>
    );
};

export default Banner;
