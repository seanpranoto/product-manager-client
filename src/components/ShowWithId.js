import React, { useState, useEffect } from "react";
import axios from "axios";

export default (props) => {
    const { id } = props;
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((data) => setProduct(data.data.product))
            .catch((err) => console.log(`Error: ${err}`));
    });
    return (
        <>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.desc}</p>
        </>
    );
};