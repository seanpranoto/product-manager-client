import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

export default (props) => {
    const { id } = props;
    const [product, setProduct] = useState({});

    const LinkStyle = {
        margin: "10px"
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((data) => setProduct(data.data.product))
            .catch((err) => console.log(`Error: ${err}`));
    }, [id]);
    return (
        <>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.desc}</p>
            <Link to={`/${id}/edit`}><button>Edit This Product</button></Link>
            <Link style={LinkStyle} to={`/${id}/delete`}><button>Delete This Product</button></Link>
        </>
    );
};