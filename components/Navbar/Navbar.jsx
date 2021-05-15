import React, {useState, useEffect} from 'react';
import links from './NavLinks';
import styles from '../../styles/Header.module.css';

export default function Navbar() {

    const [navLinks] = useState(links);
    const [menu, setMenu] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState(false);

    // toggling the menu
    const showMenu = () => {
        setMenu(!menu);
    }

    //Scrolling sticky navbar
    const handleScroll = () => {
        const  offset = window.scrollY;
        if(offset > 200){
            setScrolled(true)
        }else{
            setScrolled(false);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <>
        <nav className={scrolled ? 'navbar' : 'navbar scrolled'}>
            <div className={styles.logo}>
                <a href="#!">Fiasco</a>
            </div>
            <div>
                <ul className={menu ? 'navLinks' : 'navLinks show'}>
                    {navLinks.map((link, index) => (    
                        <li key={index}>
                            <a href={link.idName} onClick={showMenu}>
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={menu ? 'toggler' : 'toggler close'} onClick={showMenu}>
                <div className='btnLine'></div>
                <div className='btnLine'></div>
                <div className='btnLine'></div>
            </div>
           
        </nav>
         <div className={styles.navLine}></div>
         </>
    )

}
