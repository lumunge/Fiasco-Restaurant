import React, {useState} from 'react';
import links from './NavLinks';
import HeaderStyles from '../../styles/HeaderStyles.module.css';

export default function Navbar() {

    const [navLinks] = useState(links);

    return (
        <nav className={HeaderStyles.navbar}>
            <div className={HeaderStyles.logo}>
                <a href="#!">Fiasco</a>
            </div>
            <div>
                <ul className={HeaderStyles.navLinks}>
                    {navLinks.map((link) => (
                        <li>
                            <a href="#!">{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
