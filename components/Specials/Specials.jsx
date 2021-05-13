import React, {useState} from 'react';
import Special from './Special';
import SpecialsData from './SpecialData';
import SpecialsStyles from '../../styles/SpecialsStyles.module.css';


export default function Specials() {

    const [specials] = useState(SpecialsData);

    return (
        <div className={SpecialsStyles.specials} id="specials">
            <div className={SpecialsStyles.header}>
                <p className={SpecialsStyles.heading}>Our Specialities</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo aliquam, labore provident atque in officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, officia.</p>
            </div>
            <div className={SpecialsStyles.footer}>
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
