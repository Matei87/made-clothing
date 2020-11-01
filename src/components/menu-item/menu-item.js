import React from 'react';
import './menu-item.scss';

import { withRouter, useHistory } from 'react-router-dom';

const MenuItem = (props) => {
    let history = useHistory();

    const { image, title, routeName } = props.section;
    //console.log(props);


    return (
        <div className="menu-item" onClick={() => history.push({
            pathname: `${routeName}`,
            state: { section: props.section }
        })}>
            <div className="background-image">
                <img src={image} alt="image" />
            </div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);