import React from 'react';
import './ItemDetails.scss';

import { withRouter } from 'react-router-dom';

const ItemDetails = (props) => {
    console.log(props.location.state.item);
    const { id, name, image, price } = props.location.state.item;
    return (
        <>
            <h2>Name: {name}</h2>
            <p>ID: {id}</p>
            <img src={image} alt="image" />
            <p>Price: {price}</p>
        </>
    )
}

export default withRouter(ItemDetails);