import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./AddItems.css";

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = (data) => {
        data.email = user?.email;

        axios.post("http://localhost:5000/item", data).then((res) => {
            if (res.data.insertedId) {
                alert("Item added Successfully...!");
                reset();
            }
        });
    };

    return (
        <div className="page add-item text-center">
            <h1 className="fw-bold mt-3">
                Add a new
                <span className="text-warning"> Item</span>
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register("name")} placeholder="Name" />
                    <br />
                    <input
                        {...register("email")}
                        value={user?.email}
                        placeholder="Email"
                    />
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
