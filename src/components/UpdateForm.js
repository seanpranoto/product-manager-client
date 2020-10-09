import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

export default ({ id }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then(product=>{
            setTitle(product.data.product.title);
            setPrice(product.data.product.price);
            setDesc(product.data.product.desc);
        })
        .catch(err=>console.log(err));
    },[id]);

    const style = {
        display: "block",
        margin: "5px"
    }
    const buttonStyle = {
        display: "block",
        margin: "10px 0 0 45%"
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title, price, desc
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
            navigate("/");
    };

    return (
        <>
        <form onSubmit={onSubmit}>
            <label style={style} htmlFor="title">Title: </label>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label style={style} htmlFor="price">Price: </label>
            <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <label style={style} htmlFor="desc">Desctiption: </label>
            <textarea type="text" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <button style={buttonStyle}>Submit</button>
        </form>
        <Link to="/">Go Back</Link>
        </>
    );
}