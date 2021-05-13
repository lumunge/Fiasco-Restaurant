import AboutStyles from '../styles/AboutStyles.module.css';

export default function About() {
    return (
        <div className={AboutStyles.about} id="about">
            <div className={AboutStyles.aboutLeft}>
                <p>about us</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ex?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid numquam earum dolorum velit! Voluptatibus blanditiis repellendus similique? Nemo repellendus in, nostrum repudiandae natus unde nisi. Voluptate officiis sunt magni quo non hic quia dolorum illum laboriosam! Eaque, dolor doloremque.</p>
            </div>
            <div className={AboutStyles.aboutRight}>
                <div className={AboutStyles.contactInfo}>
                    <header>
                        <p>Contact</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, dolorem dolorum!</p>
                    </header>
                    <main>
                        <p>ADDRESS</p>
                        <br/>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem, ipsum.</p>
                        <p>JK 5566777</p>
                        <a href="#!">view-map</a>
                    </main>
                    <footer>
                        <p>OPENING HOURS</p>
                        <p>Monday - Friday <span className={AboutStyles.hoursLines}></span>8:00am-11:00pm</p>
                        <p>Saturday - Sunday <span className={AboutStyles.hoursLines}></span> 8:00am-11:00pm</p>
                    </footer>
                </div>
               
                <a className={AboutStyles.reservationBtn} type="button" href="#!">Table Reservation</a>
                <div className={AboutStyles.aboutImg}>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    )
}
