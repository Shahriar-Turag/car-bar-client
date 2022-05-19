import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
// import useItemDetails from "../../hooks/useItemDetails";
import "./ItemDetails.css";

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const quantityRef = useRef(null);

    useEffect(() => {
        setLoading(true);
        const url = `https://hidden-forest-40696.herokuapp.com/item/${itemId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                setLoading(false);
            });
    }, []);

    const handleRestock = (quantity) => {
        if (quantityRef.current.value) {
            const updatedQuantity =
                parseInt(quantity) + parseInt(quantityRef.current.value);

            const newQuantity = { updatedQuantity };

            fetch(`https://hidden-forest-40696.herokuapp.com/item/${itemId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newQuantity),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        const updatedItem = {
                            ...item,
                            quantity: updatedQuantity,
                        };
                        setItem(updatedItem);
                        quantityRef.current.value = "";
                        toast("Restocked successfully", { type: "default" });
                    }
                });
        }
    };

    const handleDelivered = (quantity) => {
        const updatedQuantity = parseInt(quantity) - 1;

        const newQuantity = { updatedQuantity };

        fetch(`https://hidden-forest-40696.herokuapp.com/item/${itemId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newQuantity),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    const updatedItem = { ...item, quantity: updatedQuantity };
                    setItem(updatedItem);
                    toast("Delivered successfully", { type: "success" });
                }
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="page px-lg-5 text-center">
            <div className="item-details mt-3 mt-lg-5 mb-4">
                <div className="row align-items-center">
                    <div className="col col-md-2 text-center">
                        <img
                            className="p-2 border border-secondary rounded"
                            src={item.img}
                            alt=""
                        />
                    </div>
                    <div className="col col-md-10 text-start ps-lg-5">
                        <h3 className="fw-bold">
                            <span className="title-detail">{item.name}</span>
                        </h3>
                        <p className="fw-lighter my-4">
                            <span className="text-detail">
                                {item.description}
                            </span>
                        </p>

                        <div className="item-detail-contact d-flex flex-wrap justify-content-between align-items-center">
                            <div>
                                <p>
                                    <i className="fa-solid fa-badge-dollar"></i>
                                    &nbsp;
                                    <span className="text-detail">
                                        Price: $ {item.price}
                                    </span>
                                </p>
                                <p>
                                    <span className="text-detail">
                                        Quantity: {item.quantity}
                                    </span>
                                </p>
                                <input
                                    ref={quantityRef}
                                    type="number"
                                    min={0}
                                />
                                <br />
                                <button
                                    className="btn btn-manage my-3"
                                    onClick={() => handleRestock(item.quantity)}
                                >
                                    Restock
                                </button>
                                <p>
                                    <i className="fa-solid fa-car-mirrors"></i>
                                    &nbsp;
                                    <span className="text-detail">
                                        Supplier: {item.supplier}
                                    </span>
                                </p>
                            </div>

                            <div className="">
                                <button
                                    className="btn btn-manage "
                                    onClick={() =>
                                        handleDelivered(item.quantity)
                                    }
                                >
                                    Delivered &nbsp;
                                    <i className="fas fa-check"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Link to="/manage">
                <button className=" btn btn-manage">
                    Manage Inventories &nbsp;
                </button>
            </Link>
        </div>
    );
};

export default ItemDetails;
