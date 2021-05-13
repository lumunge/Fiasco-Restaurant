import Image from 'next/image';
import HeaderStyles from '../styles/HeaderStyles.module.css';

export default function Hero() {
    return (
        <div className={HeaderStyles.hero}>
            <div className={HeaderStyles.foodImg}>
                <Image 
                    src="/foodLogo.png" 
                    alt="me" 
                    width="64" 
                    height="64" 
                />
            </div>
            <div className={HeaderStyles.heroText}>
                <h1>Lorem ipsum dolor sit.</h1>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nisi.</p>
            </div>
        </div>
    )
}
