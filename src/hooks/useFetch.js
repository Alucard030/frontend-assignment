import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = ({ url, method, body = null, headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = () => {
        axios[method](url, headers, body)
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                console.log(err)
                setError(err.message??"Something went wrong!");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { data:response, error, isLoading };
};

export default useFetch