import FooterStyles from '../styles/FooterStyles.module.css';

export default function Footer() {
    return (
        <div className={FooterStyles.footer}>
            <div>
                <p>Address</p>
                <button>view map</button>
            </div>
            <div>
                <p>Opening Hours</p>
                <button>Tbale Reservation</button>
            </div>
            <div>
                <p>We Are Social</p>
                
            </div>
        </div>
    )
}
