import SpecialsStyles from '../../styles/SpecialsStyles.module.css';

export default function Special({image, name, price}) {
    return (
        <div className={SpecialsStyles.singleSpecial}>
            <div className={SpecialsStyles.specialImg}>
                <img src={image} alt={name} />
            </div>
            <div className={SpecialsStyles.specialText}>
                <p>{name}<span>{price}</span></p>
            </div>
        </div>
    )
}
