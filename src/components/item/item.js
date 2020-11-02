import React from 'react';
import './item.scss';

import { withRouter, useHistory } from 'react-router-dom';
import { HiOutlineHeart } from "react-icons/hi";


const Item = (props) => {
    console.log(props);
    let history = useHistory();
    const { items, title } = props;

    return (
        <>
            <h2 className="collection-title">{title}</h2>
            <div className="collection-items">
                {items.map(item => (
                    <div className="collection-item" key={item.id}>
                        <img src={item.image} alt="image" onClick={() =>
                            history.push({
                                pathname: `${props.match.url}/${(item.name).split(' ').join('-').toLowerCase()}`,
                                state: { item }
                            })} />
                        <div className="content-over">
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                            <span><HiOutlineHeart /></span>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default withRouter(Item);