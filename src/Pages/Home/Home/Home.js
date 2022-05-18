import React from "react";
import Banner from "../Banner/Banner";
import Items from "../Items/Items";
import Reviews from "../Reviews/Reviews";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
    return (
        <div style={{ paddingBottom: "200px" }}>
            <Banner />
            <Items />
            <Reviews />
            <Subscribe />
        </div>
    );
};

export default Home;
