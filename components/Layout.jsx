import Navbar from './Navbar/Navbar';
import Hero from '../components/Hero';
import LayoutStyles from '../styles/Layout.module.css';

export default function Layout() {
    return (
        <div className={LayoutStyles.mainContainer}>
            <div className={LayoutStyles.container}>
                <header className={LayoutStyles.header}>
                    <Navbar/>
                    <Hero/>
                </header>

                <main className={LayoutStyles.main}>
                    <div className={LayoutStyles.about} id="about">
                        <p>About Section Here</p>
                    </div>
                    <div className={LayoutStyles.specials} id="specials">
                        <p>Specials Are Here</p>
                    </div>
                    <div className={LayoutStyles.menu} id="menu">
                        <p>Menu Shall Are Here</p>
                    </div>
                    <div className={LayoutStyles.book} id="book">
                        <p>Specials Are Here</p>
                    </div>
                </main>

                <footer className={LayoutStyles.footer}>
                    <h2>Footer Here</h2>
                </footer>
            </div>
        </div>
    )
}
