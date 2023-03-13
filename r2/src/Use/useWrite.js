import { useEffect, useState } from "react";
import axios from 'axios';

const URL = 'http://localhost:3003/numbers';

export const useWrite = () => {

    const [response, setResponse] = useState(null);
    const [create, setCreate] = useState(null);
    const [destroy, setDelete] = useState(null);

    useEffect(() => {
        if (null === create) {
            return;
        }
        axios.post(URL, create)
            .then(res => setResponse(res.data));

    }, [create]);

    useEffect(() => {
        if (null === destroy) {
            return;
        }
        axios.delete(URL + '/' + destroy.id)
            .then(res => setResponse(res.data));

    }, [destroy]);

    return [response, setCreate, setDelete];
};