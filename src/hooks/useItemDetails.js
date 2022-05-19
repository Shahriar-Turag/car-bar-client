import { useEffect, useState } from "react";

const useItemDetails = (itemId) => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        const url = `https://hidden-forest-40696.herokuapp.com/item/${itemId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setItem(data));
    }, [itemId]);
    return [item];
};

export default useItemDetails;
