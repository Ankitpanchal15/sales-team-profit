import React ,{useState,useEffect} from "react";

const FetchData = (url) => {
    const [data, setData] = useState(null);
    const [error,setError] = useState(null);

    useEffect(() => {
        fetch(url).then(Response => {
            // console.log(Response);
            return Response.json();
        }).then( val => {
            setData(val);
            // console.log(val.sales.new_order.percentage);
        }).catch(err => {
            setError(err.message)
        })

    }, [url]);

    return {data, error}
}

export default FetchData;