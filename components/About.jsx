import AboutStyles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={AboutStyles.about} id="about">
            <div className={AboutStyles.aboutLeft}>
                <p className={AboutStyles.title}>about us</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ex?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid numquam earum dolorum velit! Voluptatibus blanditiis repellendus similique? Nemo repellendus in, nostrum repudiandae natus unde nisi. Voluptate officiis sunt magni quo non hic quia dolorum illum laboriosam! Eaque, dolor doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos id earum cum distinctio quis expedita nihil? Repellendus, dolorum molestiae?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, alias quis? Rerum eaque voluptatem possimus.</p>
            </div>
            <div className={AboutStyles.aboutRight}>
                <div className={AboutStyles.contactInfo}>
                    <header>
                        <h4 className={AboutStyles.contactTitle}>Contact</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur</p>
                    </header>
                    <main>
                        <h4>ADDRESS</h4>
                        <p>Lorem ipsum dolor sitzz.</p>
                        <p>Lorem, ipsum.</p>
                        <p>JK 5566777</p>
                        <a href="#!">view-map</a>
                    </main>
                    <footer>
                        <p>OPENING HOURS</p>
                        <p>Monday - Friday <span className={AboutStyles.hoursLines}></span>8:00am-11:00pm</p>
                        <p>Saturday - Sunday <span className={AboutStyles.hoursLines}></span> 8:00am-11:00pm</p>
                    </footer>
                    <button className={AboutStyles.reservationBtn} type="button" href="#!">Table Reservation</button>
                </div>
                <div className={AboutStyles.aboutImg}>
                    <img src="./aboutBg.webp" width="100%" height="100%" alt=""/>
                </div>
            </div>
        </div>
    )
}
