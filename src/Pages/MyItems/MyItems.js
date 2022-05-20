import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import "./MyItems.css";
import auth from "../../firebase.init";
import Item from "../Home/Item/Item";
import { signOut } from "firebase/auth";
import axiosPrivate from "../../api/axiosPrivate";

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getItems = async () => {
            const author = { author: user?.email };
            const url = " https://hidden-forest-40696.herokuapp.com/myItems";
            try {
                const { data } = await axiosPrivate.post(url, author);
                setItems(data);
                console.log(data);
            } catch (error) {
                console.log(error);
                if (
                    error.response.status === 401 ||
                    error.response.status === 403
                ) {
                    signOut(auth);
                    navigate("/login");
                }
            }
            // console.log(author);
        };
        getItems();
    }, []);
    // console.log(items);

    const handleDelete = (id) => {
        const proceed = window.confirm(
            "Are you sure you want to delete this item?"
        );
        if (proceed) {
            const url = `https://hidden-forest-40696.herokuapp.com/item/${id}`;
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
        <div className="myItems">
            <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4 g-lg-5 py-5 text-center">
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
