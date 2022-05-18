import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

import auth from "../../firebase.init";
import Item from "../Home/Item/Item";

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const author = { author: user?.email };
        const url = "http://localhost:5000/myItems";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(author),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data[0]) {
                    setItems(data);
                    console.log(data);
                } else {
                    alert("No items found");
                }
            });
    }, [user.email]);

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
        <div style={{ paddingBottom: "200px" }}>
            <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4 g-lg-5 py-5">
                {items.map((item) => (
                    <Item key={item._id} item={item}>
                        <div className="d-flex gap-4">
                            <Link to={`/item/${item._id}`}>
                                <button className="btn btn-manage">
                                    Manage &nbsp;
                                    <i className="fas fa-cart-plus"></i>
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete(item._id)}
                                className="btn btn-manage"
                            >
                                Delete &nbsp;
                                <i className="fas fa-cart-plus"></i>
                            </button>
                        </div>
                    </Item>
                ))}
            </div>
        </div>
    );
};

export default MyItems;
