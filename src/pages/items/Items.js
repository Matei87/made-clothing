import React, { useContext } from 'react';
import './Items.scss';

import Item from '../../components/item/item';
import { withRouter } from 'react-router-dom';

const Items = (props) => {
    //console.log(props);
    const { name } = props.match.params;
    let product = props.product.filter(data => data.title.toLowerCase() === name);
    //console.log(product);

    // const { title, items } = product;
    return (
        <>{product.map(({ id, ...otherProps }) => (
            <Item key={id} {...otherProps} />
        ))}
        </>
    )
}

export default withRouter(Items);