import {FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp} from 'react-icons/fa';
import {FaAngleUp} from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer} id="contact">
            <div className={styles.footerContainer}>
            <div>
                <p className={styles.heading}>Address</p>
                <p>Off Avenue Lane, Nairobi Kenya</p>
                <br/>
                <p>SR 7488499 </p>
                <br/>
                <button className={styles.btn}>view map</button>
            </div>

            <div>
                <p className={styles.heading}>Opening Hours</p>
                <div>
                    <p>Monday-Friday <span>----</span> 8:00am - 8:00pm</p>
                    <br/>
                    <p>Saturdays&Sunday <span>----</span> 8:00am - 8:00pm</p>
                    <br/>
                </div>
                <button className={styles.btn}>Table Reservation</button>
            </div>
            <div>
                <p className={styles.heading}>We Are Social</p>
                <p>Dont forget to reach us on our socials</p>
                <br/>
                <br/>
                <br/>
                <div className={styles.socials}>
                    <div className={styles.icon}>
                        <a href="#!"><FaFacebookF/></a>
                    </div>
                    <div className={styles.icon}>
                        <a href="#!"><FaInstagram/></a>
                    </div>
                    <div className={styles.icon}>
                        <a href="#!"><FaTwitter/></a>
                    </div>
                    <div className={styles.icon}>
                        <a href="#!"><FaWhatsapp/></a>
                    </div>
                </div>
            </div>
        </div>
        <p className={styles.copy}>&#169; 2021 -  Fiasco Restaurant All Rights Reserved</p>
        <a className={styles.scrollBtn} href="#home"><FaAngleUp/></a>
        </div>

    )
}
