import React, { useContext } from 'react';
import './directory.scss';
import StoreContext from '../../context/StoreContext'
import MenuItem from '../../components/menu-item/menu-item';

const Directory = () => {
    const { sections } = useContext(StoreContext);
    console.log(sections);

    return (
        <div className="directory-menu">
            {sections.map(section => {
                return <MenuItem title={section.title} id={section.id} image={section.image} key={section.id} />
            })}
        </div>
    )
}

export default Directory;