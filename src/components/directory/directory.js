import React, { useContext } from 'react';
import './directory.scss';
import StoreContext from '../../context/StoreContext'
import MenuItem from '../../components/menu-item/menu-item';

const Directory = () => {
    const { shopData } = useContext(StoreContext);
    //console.log(shopData);

    return (
        <div className="directory-menu">
            {shopData.map(section => {
                return <MenuItem key={section.id} section={section} />
            })}
        </div>
    )
}

export default Directory;