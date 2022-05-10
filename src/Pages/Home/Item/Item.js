import React from "react";

import "./Item.css";

const Item = ({ item, children }) => {
    const { name, img, description, quantity, price, supplier } = item;

    return (
        <div className="col">
            <div className="card single-agent h-100 p-3 p-lg-4 rounded mx-lg-2">
                <img src={img} className="card-img-top rounded" alt="..." />
                <div className="card-body pt-3 px-0">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <p className="card-text description">
                        {description.slice(0, 50)}...
                    </p>

                    <h6 className="card-text text-secondary">
                        Price :{" "}
                        <span className="text-info fw-bold">${price}</span>{" "}
                    </h6>
                    <p>
                        <small>Quantity: {quantity}</small>
                    </p>
                    <p>
                        <small>Supplier: {supplier}</small>
                    </p>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Item;
