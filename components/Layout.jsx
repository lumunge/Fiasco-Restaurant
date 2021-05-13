import Navbar from './Navbar/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import LayoutStyles from '../styles/Layout.module.css';
import Specials from './Specials/Specials';
import Book from '../components/Book';
import Menu from './Menu/Menu';
import Footer from './Footer';

export default function Layout() {
    return (
        <div className={LayoutStyles.mainContainer}>
            <div className={LayoutStyles.container}>
                <header className={LayoutStyles.header}>
                    <Navbar/>
                    <Hero/>
                </header>

                <main className={LayoutStyles.main}>
                    <About/>
                    <Specials/>
                    <Menu/>
                    <Book/>
                </main>

                <footer className={LayoutStyles.footer}>
                    <Footer/>
                </footer>
            </div>
        </div>
    )
}
