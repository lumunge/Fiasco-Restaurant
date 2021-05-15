import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Hero() {
    return (
        <div className={styles.hero} id="home">
            <div className={styles.foodImg}>
                <Image 
                    src="/foodLogo.png" 
                    alt="me" 
                    width="64" 
                    height="64" 
                />
            </div>
            <div className={styles.heroText}>
                <p className={styles.heading}>Lorem ipsum dolor sit.</p>
                <p>Lorem, ipsum dolor. <i className="fa fa-facebook" aria-hidden="true"></i></p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nisi.</p>
            </div>
        </div>
    )
}
