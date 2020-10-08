import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

export default ({ id }) => {
    const [message, setMessage] = useState("");
    useEffect(() => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(result => setMessage("You have successfuly deleted the product!"))
            .catch(err => setMessage(`There was an error when deleting this product ${err}`));
    }, [id]);
    return (
        <>
        <h1>{message}</h1>
        <Link to="/">Go Back To Home</Link>
        </>
    )
}