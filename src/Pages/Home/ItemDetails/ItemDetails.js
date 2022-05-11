import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetails.css";

const ItemDetails = () => {
    const [item, setItem] = useState({});
    const { itemId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/item/${itemId}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                setLoading(false);
            });
    }, [itemId]);
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
                                    <i className="fas fa-envelope"></i> &nbsp;
                                    <span className="text-detail">{price}</span>
                                </p>
                                <p>
                                    <i className="fas fa-phone"></i> &nbsp;
                                    <span className="text-detail">
                                        Quantity: {quantity}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <i className="fas fa-map-marker-alt"></i>{" "}
                                    &nbsp;
                                    <span className="text-detail">
                                        Supplier: {supplier}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;
