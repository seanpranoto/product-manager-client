import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

export default () => {
    const [products, setProducts] = useState([]);

    const LinkStyle={
        margin:"0px 10px 0 5px"
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(data => setProducts(data.data.products))
            .catch(err => console.log("Error:", err));
    }, [products]);

    return (
        <>
            <h1>All Products: </h1>
            {
                products.map((val, i) => (
                    <Link style={LinkStyle} to={`/${val._id}`} >{val.title}</Link>
                ))
            }
        </>
    )
}