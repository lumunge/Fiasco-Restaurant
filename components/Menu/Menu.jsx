import styles from '../../styles/Menu.module.css';


export default function Menu() {
    return (
        <div className={styles.menu} id="menu">
            <div className={styles.header}>
                <h4>Our Menu</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla.</p>
            </div>
            <div className={styles.menuContainer}>
               
            </div>
            <button className={styles.menuBtn}>View All Menus</button>
        </div>
    )
}
