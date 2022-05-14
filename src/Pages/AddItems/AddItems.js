import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        axios.post("http://localhost:5000/item", data).then((res) => {
            if (res.data.insertedId) {
                alert("Item added Successfully...!");
                reset();
            }
        });
    };
    return (
        <div className="page add-agent text-center">
            <h1 className="fw-bold mt-3">
                Add a <span className="text-warning">New</span> Travel{" "}
                <span className="text-warning">Agent</span>
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register("name")} placeholder="Name" />
                </div>
                <div>
                    <input {...register("supplier")} placeholder="Supplier" />{" "}
                    <br />
                    <textarea
                        {...register("description")}
                        placeholder="Description"
                    />{" "}
                    <br />
                    <input {...register("img")} placeholder="Photo URL" />
                </div>
                <div>
                    <input
                        type="number"
                        {...register("price")}
                        placeholder="Price"
                    />
                    <input {...register("quantity")} placeholder="Quantity" />
                </div>

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddItems;
