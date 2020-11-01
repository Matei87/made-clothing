import React from 'react';
import './item.scss';

import { withRouter, useHistory } from 'react-router-dom';

const Item = (props) => {
    console.log(props);
    let history = useHistory();
    const { items, title } = props;

    return (
        <>
            <h2 className="collection-title">{title}</h2>
            <div className="collection-items">
                {items.map(item => (
                    <div className="collection-item" key={item.id} onClick={() =>
                        history.push({
                            pathname: `${props.match.url}/${(item.name).split(' ').join('-').toLowerCase()}`,
                            state: { item }
                        })}>
                        <img src={item.image} alt="image" />
                        <div className="content-over">
                            <span>{item.name}</span>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default withRouter(Item);