import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/item")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return [items, setItems];
};
export default useItems;

// const { itemId } = useParams();
// const [item] = useItemDetails(itemId);
// const quantityRef = useRef(null);

// const handleRestock = (quantity) => {
//     const updatedQuantity =
//         parseInt(quantity) + parseInt(quantityRef.current.value);

//     const newQuantity = { updatedQuantity };

//     fetch(`http://localhost:5000/item/${itemId}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newQuantity),
//     })
//         .then((res) => res.json())
//         .then((data) => {
//             if (data.modifiedCount > 0) {
//                 toast("Restocked successfully", { type: "success" });
//             }

//         });
// };

// const handleDelivered = (quantity) => {
//     const updatedQuantity = parseInt(quantity) - 1;

//     const newQuantity = { updatedQuantity };

//     fetch(`http://localhost:5000/item/${itemId}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newQuantity),
//     })
//         .then((res) => res.json())
//         .then((data) => {
//             if (data.modifiedCount > 0) {
//                 toast("Delivered successfully", { type: "success" });
//             }
//         });
// };
