import styles from '../../styles/Specials.module.css';

export default function Special({image, name, price}) {
    return (
        <div className={styles.singleSpecial}>
            <div className={styles.specialImg}>
                <img src={image} alt={name} width="100%" height="100%" />
            </div>
            <div className={styles.specialText}>
                <p>{name}<span>{price}</span></p>
            </div>
        </div>
    )
}
