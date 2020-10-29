import React from 'react';
import './menu-item.scss';
import { withRouter } from 'react-router-dom';


const MenuItem = ({ title, link, image, history }) => {
    // console.log(history, link)
    return (
        <div className="menu-item" onClick={() => history.push(`${link}`)}>
            <div className="background-image" style={{
                backgroundImage: `url(${image})`
            }} />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);