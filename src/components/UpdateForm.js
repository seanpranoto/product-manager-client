import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export default ({ id }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

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
        <form onSubmit={onSubmit}>
            <label style={style} htmlFor="title">Title: </label>
            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
            <label style={style} htmlFor="price">Price: </label>
            <input type="text" name="price" onChange={(e) => setPrice(e.target.value)} />
            <label style={style} htmlFor="desc">Desctiption: </label>
            <input type="text" name="desc" onChange={(e) => setDesc(e.target.value)} />
            <button style={buttonStyle}>Submit</button>
        </form>
    );
}