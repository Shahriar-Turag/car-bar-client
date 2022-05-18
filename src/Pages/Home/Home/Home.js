import React from "react";
import Banner from "../Banner/Banner";
import Items from "../Items/Items";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
    return (
        <div style={{ paddingBottom: "200px" }}>
            <Banner />
            <Items />
            <Subscribe />
        </div>
    );
};

export default Home;
