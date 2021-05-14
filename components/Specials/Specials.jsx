import React, {useState} from 'react';
import Special from './Special';
import SpecialsData from './SpecialData';
import styles from '../../styles/Specials.module.css';


export default function Specials() {

    const [specials] = useState(SpecialsData);

    return (
        <div className={styles.specials} id="specials">
            <div className={styles.header}>
                <p className={styles.heading}>Our Specialities</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo aliquam, labore provident atque in officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, officia.</p>
            </div>
            <div className={styles.footer}>
                {specials.map((special) => (
                    <Special
                        key={special.id}
                        name={special.name}
                        image={special.image}
                        price={special.price}
                    />
                ))}
            </div>
        </div>
    )
}
