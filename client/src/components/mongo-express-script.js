import axios from "axios";

export const getTransactions = async () => {
    const request = {
        url: "http://localhost:3000/api/transactions",
        method: "get",
        headers: {
            "Content-type": "application/json"
        }
    };

    const { data } = await axios(request);

    return data.reverse();
};

export const resetTransactions = async () => {
    const request = {
        url: "http://localhost:3000/api/transactions",
        method: "delete",
        headers: {
            "Content-type": "application/json"
        }
    };

    await axios(request);
};
