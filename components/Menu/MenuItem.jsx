import {FaLongArrowAltRight} from 'react-icons/fa';
import formatCurrency from '../../utils';
import styles from '../../styles/Menu.module.css';

export default function MenuItem({title, price}) {
    return (
        <div className={styles.menuItem}>
                <h4 className={styles.title}>{title}</h4>
                <span>.........................</span>
                <p className={styles.price}>{formatCurrency(price)}</p>
        </div>
    )
}