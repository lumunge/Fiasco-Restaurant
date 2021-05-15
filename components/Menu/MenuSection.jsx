import React, {useState} from 'react';
import styles from '../../styles/Menu.module.css';
import data from '../../db.json';
import MenuItem from './MenuItem';
import Categories from './Categories';

export default function MenuSection() {

    const allCategories = ['all', ...new Set(data.menuItems.map((item) => item.category))];
    const [menuItems, setMenuItems] = useState(data.menuItems);
    const [categories] = useState(allCategories);

    const filterMenu = (category) => {
        if(category === 'all'){
            setMenuItems(data.menuItems);
        }else{
            const newItems = data.menuItems.filter((item) => item.category === category);
            setMenuItems(newItems);
        }
    }

    return (
        <div className={styles.menu} id="menu">
            <div className={styles.header}>
                <h4>Our Menu</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla.</p>
                <br/>
            </div>
            <div className={styles.container}>
                <div>
                    <Categories
                        categories={categories}
                        filterMenu={filterMenu}
                    />
                </div>
                <div className={styles.menuContainer}>
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}
