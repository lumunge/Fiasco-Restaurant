import React, {useState} from 'react';
import links from './NavLinks';
import styles from '../../styles/Header.module.css';

export default function Navbar() {

    const [navLinks] = useState(links);

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <a href="#!">Fiasco</a>
            </div>
            <div>
                <ul className={styles.navLinks}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href="#!">{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
