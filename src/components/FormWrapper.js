import React from "react";
import Form from './Form';
import ShowAll from './ShowAll';
import StyledBorder from './StyledBorder';

export default () => {
    return (
        <>
            <h1>Product Manager</h1>
            <Form />
            <StyledBorder />
            <ShowAll />
        </>
    )
}