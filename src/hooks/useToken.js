import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState("");

    useEffect(() => {
        const getToken = async () => {
            console.log(user);
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post(
                    "https://hidden-forest-40696.herokuapp.com/login",
                    {
                        email,
                    }
                );
                setToken(data.token);
                localStorage.setItem("token", data.token);
            }
        };
        getToken();
    }, [user]);
    return [token];
};

export default useToken;
