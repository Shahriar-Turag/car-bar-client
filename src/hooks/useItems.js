import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://hidden-forest-40696.herokuapp.com/item")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return [items, setItems];
};
export default useItems;
