import React from 'react';
import './menu-item.scss';
// import logo from '../../img/'

const MenuItem = ({ title, id, image }) => {
    return (
        <div className="menu-item">
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

export default MenuItem;