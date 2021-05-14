import styles from '../../styles/Menu.module.css';

export default function Categories({categories, filterMenu}) {
    return (
        <div className={styles.categoryContainer}>
            {categories.map((category, index) => (
                <button key={index} onClick={() => filterMenu(category)}>{category}</button>
            ))}
        </div>
    )
}
