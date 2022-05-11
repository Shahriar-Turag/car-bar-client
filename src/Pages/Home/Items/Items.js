import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Item from "../Item/Item";

const Items = () => {
    const [items, setItems] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetch("http://localhost:5000/item")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <div className="container home-products text-center p-3 p-lg-5 mx-lg-auto">
            <h2 className="fw-bold">
                FEATURED <span className="text-warning">ITEMS</span>
            </h2>

            <div className="row row-cols-1 row-cols-md-3 g-4 g-lg-5 py-5">
                {location.pathname === "/"
                    ? items.slice(0, 6).map((item) => (
                          <Item key={item._id} item={item}>
                              <Link to={`/item/${item._id}`}>
                                  <button className="btn btn-book">
                                      Manage &nbsp;
                                      <i className="fas fa-cart-plus"></i>
                                  </button>
                              </Link>
                          </Item>
                      ))
                    : items.map((item) => (
                          <Item key={item._id} item={item}>
                              <Link to={`/item/${item._id}`}>
                                  <button className="btn btn-book">
                                      Manage &nbsp;
                                      <i className="fas fa-cart-plus"></i>
                                  </button>
                              </Link>
                          </Item>
                      ))}
            </div>
        </div>
    );
};

export default Items;
