import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Specials from '../components/Specials/Specials';
import MenuSection from '../components/Menu/MenuSection';
import Book from '../components/Book';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
        <Head>
        <title>Fiasco Restaurant</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="description" content="Food, Recipes, Restaurant" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <script src="https://use.fontawesome.com/0b056472e2.js"></script>
      </Head>
        <div className='mainContainer'>
            <div className='container'>
                <header className='header'>
                    <Navbar/>
                    <Hero/>
                </header>

                <main className='main'>
                    <About/>
                    <Specials/>
                    <MenuSection/>
                    <Book/>
                </main>

                <footer className='footer'>
                    <Footer/>
                </footer>
                </div>
        </div>
        </>
  )
}
