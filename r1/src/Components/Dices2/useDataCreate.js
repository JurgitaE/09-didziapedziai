import { useEffect, useState } from "react";
import axios from 'axios';

const URL = 'http://localhost:3003/dices';

export const useDataCreate = (init) => {
    const [response, setResponse] = useState(null);
    const [data, setData] = useState(init);

    useEffect(() => {
        if (data === null) return;
        axios.post(URL, data).then(res => {
            console.log(res.data);
            setResponse(res.data);
        });

    }, [data]);


    return [response, setData];
};