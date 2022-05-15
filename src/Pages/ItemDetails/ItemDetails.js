import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
// import useItemDetails from "../../hooks/useItemDetails";
import "./ItemDetails.css";

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const quantityRef = useRef(null);

    useEffect(() => {
        setLoading(true);
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                setLoading(false);
            });
    }, []);

    const handleRestock = (quantity) => {
        const updatedQuantity =
            parseInt(quantity) + parseInt(quantityRef.current.value);

        const newQuantity = { updatedQuantity };

        fetch(`http://localhost:5000/item/${itemId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newQuantity),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    const remaining = item.filter(
                        (item) => item._id !== itemId
                    );
                    setItem(remaining);
                    // item.quantity = updatedQuantity;
                    toast("Restocked successfully", { type: "success" });
                }
            });
    };

    const handleDelivered = (quantity) => {
        const updatedQuantity = parseInt(quantity) - 1;

        const newQuantity = { updatedQuantity };

        fetch(`http://localhost:5000/item/${itemId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newQuantity),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast("Delivered successfully", { type: "success" });
                }
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const { name, description, price, img, quantity, supplier } = item;

    return (
        <div className="page px-lg-5">
            <div className="item-details mt-3 mt-lg-5">
                <div className="row align-items-center">
                    <div className="col col-md-2 text-center">
                        <img
                            className="p-2 border border-secondary rounded"
                            src={img}
                            alt=""
                        />
                    </div>
                    <div className="col col-md-10 text-start ps-lg-5">
                        <h3 className="fw-bold">
                            <span className="title-detail">{name}</span>
                        </h3>
                        <p className="fw-lighter my-4">
                            <span className="text-detail">{description}</span>
                        </p>

                        <div className="item-detail-contact d-flex flex-wrap justify-content-between align-items-center">
                            <div>
                                <p>
                                    <i className="fa-solid fa-badge-dollar"></i>
                                    &nbsp;
                                    <span className="text-detail">{price}</span>
                                </p>
                                <p>
                                    <span className="text-detail">
                                        Quantity: {quantity}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <i className="fa-solid fa-car-mirrors"></i>
                                    &nbsp;
                                    <span className="text-detail">
                                        Supplier: {supplier}
                                    </span>
                                </p>
                            </div>
                            <input ref={quantityRef} type="number" min={0} />
                            <button
                                onClick={() => handleRestock(item.quantity)}
                            >
                                Restock
                            </button>
                            <button
                                onClick={() => handleDelivered(item.quantity)}
                            >
                                Delivered
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;
