import styles from '../../styles/Menu.module.css';
import MenuItem from './MenuItem';


export default function Menu({items}) {

    console.log(items);


    return (
        <div className={styles.menu} id="menu">
            <div className={styles.header}>
                <h4>Our Menu</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla.</p>
            </div>
            <div className={styles.menuContainer}>
               <MenuItem/>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const items = await fetch('https://raw.githubusercontent.com/lumungep12/Fiasco-Restaurant/master/MenuData.json');
    // const menuItems = await items.json();
    return{
        props: {
            items
        }
    }
}
