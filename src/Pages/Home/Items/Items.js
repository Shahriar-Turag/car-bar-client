import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
    const [items, setItems] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetch("http://localhost:5000/item")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm(
            "Are you sure you want to delete this service?"
        );
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = items.filter((i) => i._id !== id);
                    setItems(remaining);
                });
        }
    };

    return (
        <div className="container  text-center p-3 p-lg-5 mx-lg-auto">
            <h2 className="fw-bold">
                FEATURED <span className="text-warning">ITEMS</span>
            </h2>

            <div
                className="row row-cols-1 row-cols-md-3 g-4 g-lg-5 py-5"
                style={{ paddingBottom: "200px" }}
            >
                {location.pathname === "/" || location.pathname === "/home"
                    ? items.slice(0, 6).map((item) => (
                          <Item key={item._id} item={item}>
                              <Link to={`/item/${item._id}`}>
                                  <button className="btn btn-manage mx-auto">
                                      Update &nbsp;
                                      <i className="fas fa-angle-right"></i>
                                  </button>
                              </Link>
                          </Item>
                      ))
                    : location.pathname === "/manage"
                    ? items.map((item) => (
                          <Item key={item._id} item={item}>
                              <div className="d-flex gap-4">
                                  <Link to={`/item/${item._id}`}>
                                      <button className="btn btn-manage">
                                          Update &nbsp;
                                          <i className="fas fa-angle-right"></i>
                                      </button>
                                  </Link>
                                  <button
                                      onClick={() => handleDelete(item._id)}
                                      className="btn btn-manage"
                                  >
                                      Delete &nbsp;
                                      <i className="far fa-trash-alt"></i>
                                  </button>
                              </div>
                          </Item>
                      ))
                    : items.map((item) => (
                          <Item key={item._id} item={item}>
                              <Link to={`/item/${item._id}`}>
                                  <button className="btn btn-manage text-center">
                                      Update &nbsp;
                                      <i className="fas fa-angle-right"></i>
                                  </button>
                              </Link>
                          </Item>
                      ))}
            </div>
            {location.pathname === "/" || location.pathname === "/home" ? (
                <Link to="/manage">
                    <button className="btn btn-manage ">
                        Manage Inventories &nbsp;
                    </button>
                </Link>
            ) : (
                ""
            )}
        </div>
    );
};

export default Items;
