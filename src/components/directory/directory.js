import React, { useContext } from 'react';
import './directory.scss';
import StoreContext from '../../context/StoreContext'
import MenuItem from '../../components/menu-item/menu-item';

const Directory = () => {
    const { sections } = useContext(StoreContext);
    //console.log(sections);

    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionProps }) => {
                return <MenuItem {...otherSectionProps} key={id} />
            })}
        </div>
    )
}

export default Directory;